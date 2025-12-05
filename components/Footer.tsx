export default function Footer() {
    return (
        <footer className="bg-charcoal border-t border-white/5 py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-2xl font-serif font-bold text-white tracking-tighter">
                    Paddy<span className="text-gold">.</span>
                </div>
                <div className="text-muted text-sm">
                    &copy; {new Date().getFullYear()} Paddy Chougule. All rights reserved.
                </div>
                <div className="flex space-x-6">
                    <a href="#" className="text-muted hover:text-white transition-colors text-sm uppercase tracking-wider">Instagram</a>
                    <a href="#" className="text-muted hover:text-white transition-colors text-sm uppercase tracking-wider">Twitter</a>
                    <a href="#" className="text-muted hover:text-white transition-colors text-sm uppercase tracking-wider">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}
