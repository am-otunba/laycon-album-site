"use client";

import Image from "next/image";

const products = [
{ id:1, name:"Black T-Shirt", price:"₦45,000", image:"/Black T-shirt.png", link:"https://thelayconstore.bumpa.shop/products/ksmw-t-shirt/4499475?location=313151"},
{ id:2, name:"White T-Shirt", price:"₦45,000", image:"/White T-shirt.png", link:"https://thelayconstore.bumpa.shop/products/ksmw-t-shirt/4499475?location=313151"},
{ id:3, name:"Black Hoodie", price:"₦55,000", image:"/Black Hoodie.png", link:"https://thelayconstore.bumpa.shop/products/ksmw-hoodie/4503053?location=313151"},
{ id:4, name:"White Hoodie", price:"₦55,000", image:"/White Hoodie.png", link:"https://thelayconstore.bumpa.shop/products/ksmw-hoodie/4503053?location=313151"},
{ id:5, name:"Black crop-top", price:"₦30,000", image:"/Black Crop-top.png", link:"https://thelayconstore.bumpa.shop/products/ksmw-crop-top/4501094?location=313151"},
{ id:6, name:"White crop-top", price:"₦30,000", image:"/White Crop-top.png", link:"https://thelayconstore.bumpa.shop/products/ksmw-crop-top/4501094?location=313151"},
{ id:7, name:"Double-Layered Sleeve Shirt", price:"₦55,000", image:"/Double Layered Sleeve Shirt.png", link:"https://thelayconstore.bumpa.shop/products/ksmw-double-layered-sleeve-shirt/4503022?location=313151"},
{ id:8, name:"Black Tank", price:"₦35,000", image:"/Black Tank-top.png", link:"https://thelayconstore.bumpa.shop/products/ksmw-tank-top/4501176?location=313151"},
{ id:9, name:"White Tank", price:"₦35,000", image:"/White Tank-top.png", link:"https://thelayconstore.bumpa.shop/products/ksmw-tank-top/4501176?location=313151"},
{ id:10, name:"The Listening Experience Kampala (5 Yards)", price:"₦20,000", image:"/Kampala.png", link:"https://thelayconstore.bumpa.shop/products/ksmw-kampala/4504223?location=313151"}
];

const Shop = () => {
return ( <section className="bg-[#F1CB5E40] py-12 px-4 sm:px-6 lg:px-16">

<h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
  Merch
</h2>
  {/* GRID */}
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">

    {products.map((product) => (
      <div
        key={product.id}
        onClick={() => window.open(product.link, "_blank")}
        className="cursor-pointer group"
      >

        {/* PRODUCT CARD */}
        <div className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition">

          {/* IMAGE */}
          <div className="flex items-center justify-center h-[140px] sm:h-[180px] p-3">
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="max-h-full w-auto group-hover:scale-105 transition duration-300"
            />
          </div>

          {/* INFO */}
          <div className="bg-black text-white text-center px-2 py-3">

            <h3 className="text-xs sm:text-sm md:text-base font-medium leading-tight">
              {product.name}
            </h3>

            <p className="text-xs sm:text-sm md:text-base mt-1">
              {product.price}
            </p>

          </div>

        </div>

      </div>
    ))}

  </div>

</section>

);
};

export default Shop;
