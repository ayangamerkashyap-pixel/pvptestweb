#!/usr/bin/env python3
"""
Custom HTTP Server Router - Removes .html extension from URLs
Useful for local development of static sites with clean URLs
"""

import os
import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler
from urllib.parse import urlparse, unquote
import mimetypes


class RouterHTTPRequestHandler(SimpleHTTPRequestHandler):
    """
    Custom request handler that removes .html extension requirement
    Maps /pages/homepage -> /pages/homepage.html
    """

    def do_GET(self):
        """Handle GET requests with URL rewriting"""
        # Parse the URL path
        path = unquote(urlparse(self.path).path)
        
        # Remove trailing slashes
        if path != "/" and path.endswith("/"):
            path = path[:-1]
        
        # Try to serve the file as-is first
        full_path = self.translate_path(path)
        
        # If the file exists, serve it
        if os.path.isfile(full_path):
            # Set correct MIME type
            if full_path.endswith('.html'):
                self.send_response(200)
                self.send_header('Content-type', 'text/html; charset=utf-8')
                self.end_headers()
                with open(full_path, 'rb') as f:
                    self.wfile.write(f.read())
                return
            else:
                return super().do_GET()
        
        # If it's a directory with index.html, serve it
        if os.path.isdir(full_path):
            index_path = os.path.join(full_path, "index.html")
            if os.path.isfile(index_path):
                self.send_response(200)
                self.send_header('Content-type', 'text/html; charset=utf-8')
                self.end_headers()
                with open(index_path, 'rb') as f:
                    self.wfile.write(f.read())
                return
        
        # Try adding .html extension
        html_path = full_path + ".html"
        if os.path.isfile(html_path):
            self.send_response(200)
            self.send_header('Content-type', 'text/html; charset=utf-8')
            self.send_header('Cache-Control', 'no-cache')
            self.end_headers()
            with open(html_path, 'rb') as f:
                self.wfile.write(f.read())
            return
        
        # If file not found, try serving index.html (for SPA routing)
        if path != "/" and not path.startswith("/Images"):
            index_path = os.path.join(self.translate_path("/"), "index.html")
            if os.path.isfile(index_path):
                self.send_response(200)
                self.send_header('Content-type', 'text/html; charset=utf-8')
                self.end_headers()
                with open(index_path, 'rb') as f:
                    self.wfile.write(f.read())
                return
        
        # Otherwise, send 404
        self.send_error(404, "File not found")

    def end_headers(self):
        """Add headers to prevent caching of HTML files"""
        if self.path.endswith('.html') or not self.path or self.path == '/':
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
            self.send_header('Pragma', 'no-cache')
            self.send_header('Expires', '0')
        super().end_headers()

    def log_message(self, format, *args):
        """Custom logging"""
        print(f"[Server] {self.client_address[0]} - {format % args}")


def run_router(port=8000, host="127.0.0.1"):
    """Start the router server"""
    server_address = (host, port)
    httpd = HTTPServer(server_address, RouterHTTPRequestHandler)
    
    print(f"\n{'='*60}")
    print(f"🚀 Router Server Started")
    print(f"{'='*60}")
    print(f"Server running at: http://{host}:{port}/")
    print(f"Clean URLs enabled (*.html extension removed)")
    print(f"\nExample URLs:")
    print(f"  http://localhost:{port}/pages/homepage")
    print(f"  http://localhost:{port}/pages/services")
    print(f"  http://localhost:{port}/pages/contact")
    print(f"\nPress CTRL+C to stop the server")
    print(f"{'='*60}\n")
    
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\n✓ Server stopped")
        sys.exit(0)


if __name__ == "__main__":
    # Allow custom port via command line
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    run_router(port=port)
