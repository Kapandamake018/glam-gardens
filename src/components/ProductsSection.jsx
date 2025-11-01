import { useState } from "react";
import { cn } from "../lib/utils";
import { ShoppingBag, Sparkles } from "lucide-react";

// Product data - Update with your 22 products
// Place your product images in the public/products/ folder
const products = [
  // Glam Care Combos
  {
    id: 1,
    name: "Glam Care Package 1",
    category: "glam-care",
    price: 485,
    image: "/products/image1.jpg",
    description: "",
  },
  {
    id: 2,
    name: "Glam Care Package 2",
    category: "glam-care",
    price: 485,
    image: "/products/image2.jpg",
   // description: "Description here",
  },
  {
    id: 3,
    name: "Glam Care Package 3",
    category: "glam-care",
    price: 600,
    image: "/products/image3.jpg",
   // description: "Description here",
  },
  {
    id: 4,
    name: "Glam Care Package 4",
    category: "glam-care",
    price: 485,
    image: "/products/image4.jpg",
  //  description: "Description here",
  },
  // Valentines Combos
  {
    id: 5,
    name: "Valentines Gift Pack 1",
    category: "valentines",
    price: 550,
    image: "/products/image5.jpg",
    description: "For your special someone",
  },
  {
    id: 6,
    name: "Valentines Gift Pack 2",
    category: "valentines",
    price: 550,
    image: "/products/image6.jpg",
    description: "For your special someone",
  },
  {
    id: 7,
    name: "Valentines Gift Pack 3",
    category: "valentines",
    price: 550,
    image: "/products/image7.jpg",
    description: "For your special someone",
  },
  // Glam Smoothie Cups
  {
    id: 8,
    name: "Glam Smoothie Cup 1",
    category: "smoothie-cups",
    price: 125,
    image: "/products/image8.jpg",
    description: "A cup full of glam!",
  },
  {
    id: 9,
    name: "Valentines Gift Pack 4",
    category: "valentines",
    price: 780,
    image: "/products/image9.jpg",
    description: "For your special someone with extra love",
  },
  {
    id: 10,
    name: "Glam Smoothie Cup 2",
    category: "smoothie-cups",
    price: 150,
    image: "/products/image10.jpg",
    description: "Comes with a treat!",
  },
  // Accessories
  {
    id: 11,
    name: "Tote Bags",
    category: "accessories",
    price: 110,
    image: "/products/image11.jpg",
    description: "Perfect for carrying your essentials!",
  },
  // Lip Gloss
  {
    id: 12,
    name: "Lip Gloss",
    category: "lip-gloss",
    price: 30,
    image: "/products/image12.jpg",
    description: "Get 2 for K30!",
  },
  {
    id: 13,
    name: "Clear Lip Gloss",
    category: "lip-gloss",
    price: 30,
    image: "/products/image13.jpg",
    description: "Get 2 for K30!",
  },
  {
    id: 14,
    name: "Teddy Bear Lip Gloss",
    category: "lip-gloss",
    price: 45,
    image: "/products/image14.jpg",
    description: "Get 2 for K45!",
  },
  // Skin Care
  {
    id: 15,
    name: "Lip Serum",
    category: "lip-gloss",
    price: 30,
    image: "/products/image15.jpg",
    description: "Get one at K30!",
  },
  {
    id: 17,
    name: "Hair Clips",
    category: "accessories",
    price: 35,
    image: "/products/image17.jpg",
    description: "",
  },
  {
    id: 18,
    name: "Tassel Mini Wallets",
    category: "accessories",
    price: 65,
    image: "/products/image18.jpg",
    description: "Perfect for keeping your cards organized!",
  },

  {
    id: 20,
    name: "Glam Summer Combo 1",
    category: "glam-care",
    price: 300,
    image: "/products/image20.jpg",
   // description: "Description here",
  },
  {
    id: 21,
    name: "Ribbed Headbands",
    category: "accessories",
    price: 25,
    image: "/products/image21.jpg",
    description: "Perfect for adding a pop of color!",
  },
  {
    id: 22,
    name: "Hand Cream",
    category: "skin-care",
    price: 55,
    image: "/products/image22.jpg",
    description: "Get one at K55!",
  },
  {
    id: 23,
    name: "More Hair Clips",
    category: "accessories",
    price: 35,
    image: "/products/image23.jpg",
    description: "Different colors available!",
  },
  {
    id: 24,
    name: "Glam Summer Combo 2",
    category: "glam-care",
    price: 200,
    image: "/products/image24.jpg",
   // description: "Description here",
  },
];

const categories = [
  { id: "all", name: "All Products", icon: Sparkles },
  { id: "glam-care", name: "Glam Care Combos", icon: Sparkles },
  { id: "valentines", name: "Valentines Combos", icon: Sparkles },
  { id: "smoothie-cups", name: "Glam Smoothie Cups", icon: Sparkles },
  { id: "lip-gloss", name: "Lip Gloss", icon: Sparkles },
  { id: "skin-care", name: "Skin Care", icon: Sparkles },
  { id: "accessories", name: "Accessories", icon: Sparkles },
];

export const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(8); // Show 8 products initially
  
  const filteredProducts = products.filter(
    (product) => activeCategory === "all" || product.category === activeCategory
  );

  // Products to display (limited by visibleCount)
  const displayedProducts = filteredProducts.slice(0, visibleCount);
  
  // Check if there are more products to show
  const hasMore = visibleCount < filteredProducts.length;

  // Handle category change - reset visible count
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setVisibleCount(8); // Reset to show 8 products when changing category
  };

  // Load more products
  const loadMore = () => {
    setVisibleCount(prev => prev + 8); // Show 8 more products
  };

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
                onClick={() => handleCategoryChange(category.id)}
                className={cn(
                  "px-6 py-3 rounded-full transition-all duration-300 font-medium flex items-center gap-2",
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg scale-105"
                    : "bg-card border-2 border-border text-foreground hover:border-primary hover:scale-105"
                )}
              >
                <Icon size={18} />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayedProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 card-hover relative border border-border"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Product Image */}
              <div className="relative h-64 bg-gradient-to-br from-pink-50/50 to-yellow-50/50 dark:from-pink-900/20 dark:to-yellow-900/20 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                
                {/* Fallback placeholder */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-100/50 to-yellow-100/50 dark:from-pink-900/20 dark:to-yellow-900/20 absolute inset-0" style={{display: 'none'}}>
                  <div className="text-center">
                    <ShoppingBag size={48} className="mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground">Product Image</p>
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <a href="#contact" className="block w-full glam-button text-sm text-center">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                
                {/* Price */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-2xl font-bold"
                    style={{ color: "#D4AF37" }}
                  >
                    K{product.price}
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

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mb-12">
            <button
              onClick={loadMore}
              className="glam-button px-8 py-3 text-lg"
            >
              Load More Products
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-8">
          <p className="text-lg text-muted-foreground mb-6">
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
