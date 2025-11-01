import { useState } from "react";
import { cn } from "../lib/utils";
import { ShoppingBag, Sparkles } from "lucide-react";

// Sample products - you'll replace these with real product data
const products = [
  {
    id: 1,
    name: "Luxury Lip Gloss",
    category: "lips",
    price: 24.99,
    image: "/products/lipgloss.jpg", // Replace with actual image paths
    description: "High-shine, long-lasting formula",
    featured: true
  },
  {
    id: 2,
    name: "Radiant Foundation",
    category: "face",
    price: 45.99,
    image: "/products/foundation.jpg",
    description: "Flawless, buildable coverage",
    featured: true
  },
  {
    id: 3,
    name: "Golden Glow Highlighter",
    category: "face",
    price: 32.99,
    image: "/products/highlighter.jpg",
    description: "Luminous golden shimmer",
    featured: false
  },
  {
    id: 4,
    name: "Velvet Matte Lipstick",
    category: "lips",
    price: 28.99,
    image: "/products/lipstick.jpg",
    description: "Rich, velvety matte finish",
    featured: false
  },
  {
    id: 5,
    name: "Lash Extension Mascara",
    category: "eyes",
    price: 26.99,
    image: "/products/mascara.jpg",
    description: "Dramatic length and volume",
    featured: false
  },
  {
    id: 6,
    name: "Rose Petal Blush",
    category: "face",
    price: 29.99,
    image: "/products/blush.jpg",
    description: "Natural, rosy glow",
    featured: false
  },
  {
    id: 7,
    name: "Glam Eyeshadow Palette",
    category: "eyes",
    price: 54.99,
    image: "/products/eyeshadow.jpg",
    description: "12 stunning shades",
    featured: true
  },
  {
    id: 8,
    name: "Diamond Lip Liner",
    category: "lips",
    price: 18.99,
    image: "/products/lipliner.jpg",
    description: "Precise, long-wearing",
    featured: false
  },
];

const categories = [
  { id: "all", name: "All Products", icon: Sparkles },
  { id: "face", name: "Face", icon: Sparkles },
  { id: "lips", name: "Lips", icon: Sparkles },
  { id: "eyes", name: "Eyes", icon: Sparkles },
];

export const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredProducts = products.filter(
    (product) => activeCategory === "all" || product.category === activeCategory
  );

  return (
    <section id="products" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our luxurious collection of premium beauty products
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-6 py-3 rounded-full transition-all duration-300 font-medium flex items-center gap-2",
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg scale-105"
                    : "bg-white border-2 border-pink-200 text-gray-700 hover:border-pink-400 hover:scale-105"
                )}
              >
                <Icon size={18} />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 card-hover relative"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Product Image */}
              <div className="relative h-64 bg-gradient-to-br from-pink-50 to-yellow-50 overflow-hidden">
                {product.featured && (
                  <div
                    className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{
                      background: "linear-gradient(135deg, #EC4899, #FFD700)",
                    }}
                  >
                    ⭐ Featured
                  </div>
                )}
                
                {/* Placeholder for product image */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-100 to-yellow-100 group-hover:scale-110 transition-transform duration-500">
                  <div className="text-center">
                    <ShoppingBag size={48} className="mx-auto mb-2 text-pink-400" />
                    <p className="text-sm text-gray-500">Product Image</p>
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <button className="w-full glam-button text-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                
                {/* Price */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-2xl font-bold"
                    style={{ color: "#D4AF37" }}
                  >
                    ${product.price}
                  </span>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Gold accent border */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(90deg, #EC4899, #FFD700, #EC4899)",
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Can't find what you're looking for?
          </p>
          <a href="#contact" className="gold-button">
            Contact Us for Custom Orders
          </a>
        </div>
      </div>
    </section>
  );
};
