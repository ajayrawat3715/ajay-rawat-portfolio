"use client";

import React, { useState } from "react";
import { Utensils, ShoppingBag, Plus, Minus, Check, Star, Info, ExternalLink } from "lucide-react";

interface Dish {
  id: string;
  name: string;
  category: "Meals" | "Street Food" | "Biryani" | "Desserts";
  price: number;
  rating: number;
  isVeg: boolean;
  desc: string;
}

const DISHES: Dish[] = [
  {
    id: "d1",
    name: "Paneer Butter Masala Meal",
    category: "Meals",
    price: 240,
    rating: 4.8,
    isVeg: true,
    desc: "Cottage cheese cubes simmered in rich tomato butter gravy, served with 2 butter naans.",
  },
  {
    id: "d2",
    name: "Hyderabadi Dum Biryani",
    category: "Biryani",
    price: 290,
    rating: 4.9,
    isVeg: false,
    desc: "Fragrant basmati rice layered with slow-cooked spiced meat, saffron, and fried onions.",
  },
  {
    id: "d3",
    name: "Crispy Dahi Puri Platter",
    category: "Street Food",
    price: 120,
    rating: 4.7,
    isVeg: true,
    desc: "Six crispy puris stuffed with potatoes, spiced yogurt, tamarind chutney, and fine sev.",
  },
  {
    id: "d4",
    name: "Gulab Jamun with Rabri",
    category: "Desserts",
    price: 110,
    rating: 4.9,
    isVeg: true,
    desc: "Warm khoya dumplings soaked in rose-cardamom syrup paired with thickened rabri.",
  },
];

export const SwaadWallahModal: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [cart, setCart] = useState<{ [id: string]: number }>({});
  const [orderPlaced, setOrderPlaced] = useState(false);

  const categories = ["All", "Meals", "Biryani", "Street Food", "Desserts"];

  const addToCart = (id: string) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[id] > 1) {
        updated[id] -= 1;
      } else {
        delete updated[id];
      }
      return updated;
    });
  };

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalPrice = Object.entries(cart).reduce((sum, [id, qty]) => {
    const dish = DISHES.find((d) => d.id === id);
    return sum + (dish ? dish.price * qty : 0);
  }, 0);

  const filteredDishes =
    activeCategory === "All"
      ? DISHES
      : DISHES.filter((d) => d.category === activeCategory);

  const handleCheckout = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      setCart({});
      setOrderPlaced(false);
    }, 2500);
  };

  return (
    <div className="rounded-xl bg-canvas-surface border border-canvas-border overflow-hidden shadow-2xl">
      {/* Top Navbar */}
      <div className="px-4 py-3 bg-canvas-subtle border-b border-canvas-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Utensils className="w-4 h-4 text-accent" />
          <span className="font-mono text-xs font-semibold text-sand">
            SwaadWallah · Interactive UI Simulator
          </span>
          <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-accent/10 text-accent border border-accent/20">
            IBM Project
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-sand">
          <ShoppingBag className="w-3.5 h-3.5 text-accent" />
          <span>{totalItems} Items</span>
          <span className="text-sand-subtle">·</span>
          <span className="text-accent font-semibold">₹{totalPrice}</span>
        </div>
      </div>

      <div className="p-4 sm:p-5 space-y-4">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-mono transition-colors whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-accent text-canvas font-semibold"
                  : "bg-canvas-subtle text-sand-muted hover:text-sand border border-canvas-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dish Discovery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filteredDishes.map((dish) => {
            const qty = cart[dish.id] || 0;
            return (
              <div
                key={dish.id}
                className="p-3.5 rounded-lg bg-canvas-subtle border border-canvas-border space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`w-2.5 h-2.5 rounded-sm border flex items-center justify-center p-0.5 ${
                          dish.isVeg
                            ? "border-emerald-500 text-emerald-500"
                            : "border-rose-500 text-rose-500"
                        }`}
                      >
                        <span
                          className={`w-1 h-1 rounded-full ${
                            dish.isVeg ? "bg-emerald-500" : "bg-rose-500"
                          }`}
                        />
                      </span>
                      <h5 className="font-sans font-bold text-xs text-sand">{dish.name}</h5>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-amber-400">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{dish.rating}</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-sand-muted mt-1 leading-normal font-sans">
                    {dish.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-canvas-border/50">
                  <span className="font-mono font-bold text-xs text-sand">₹{dish.price}</span>

                  {qty === 0 ? (
                    <button
                      onClick={() => addToCart(dish.id)}
                      className="px-2.5 py-1 rounded bg-canvas-elevated border border-canvas-border text-xs font-mono text-sand hover:border-accent hover:text-accent transition-colors flex items-center gap-1"
                    >
                      <Plus className="w-3 h-3" />
                      <span>Add</span>
                    </button>
                  ) : (
                    <div className="flex items-center gap-2 bg-canvas-elevated px-2 py-0.5 rounded border border-canvas-border text-xs font-mono">
                      <button
                        onClick={() => removeFromCart(dish.id)}
                        className="text-sand-muted hover:text-sand"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-accent font-semibold">{qty}</span>
                      <button
                        onClick={() => addToCart(dish.id)}
                        className="text-sand-muted hover:text-sand"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Cart Action Bar */}
        {totalItems > 0 && (
          <div className="p-3 rounded-lg bg-canvas-elevated border border-canvas-border flex items-center justify-between">
            <div className="text-xs">
              <span className="font-mono text-sand font-semibold">Subtotal: ₹{totalPrice}</span>
              <span className="text-sand-muted text-[11px] ml-2">
                ({totalItems} items selected in mock order)
              </span>
            </div>

            <button
              onClick={handleCheckout}
              disabled={orderPlaced}
              className="px-4 py-1.5 rounded bg-accent text-[#05070B] text-xs font-mono font-bold hover:bg-accent-hover transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,229,255,0.35)]"
            >
              {orderPlaced ? (
                <>
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  <span>Order Dispatched!</span>
                </>
              ) : (
                <span>Confirm Order Flow ↗</span>
              )}
            </button>
          </div>
        )}

        {/* Technical Architecture Notes */}
        <div className="p-3 rounded-lg bg-canvas-subtle border border-canvas-border/60 text-[11px] font-mono text-sand-muted space-y-1">
          <div className="text-sand font-medium flex items-center gap-1.5">
            <Info className="w-3 h-3 text-accent" />
            <span>Under the hood (HTML5 · CSS3 · Pure JavaScript · JSON):</span>
          </div>
          <div>• Structured menu schema decoupled into JSON fixtures for mock API consumption.</div>
          <div>• DOM event delegation for instantaneous cart calculations with zero library latency.</div>
        </div>
      </div>
    </div>
  );
};

