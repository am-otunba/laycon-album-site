"use client";

import Image from "next/image";

const products = [
{ id:1, name:"Black T-Shirt", price:"₦45,000", image:"/Black T-shirt.png", link:"https://thekashimawoostore.bumpa.shop/products/black-tshirt/4720455?location=325597"},
{ id:2, name:"White T-Shirt", price:"₦45,000", image:"/White T-shirt.png", link:"https://thekashimawoostore.bumpa.shop/products/white-t-shirt/4720471?location=325597"},
{ id:3, name:"Black Hoodie", price:"₦55,000", image:"/Black Hoodie.png", link:"https://thekashimawoostore.bumpa.shop/products/black-hoodie/4720477?location=325597"},
{ id:4, name:"White Hoodie", price:"₦55,000", image:"/White Hoodie.png", link:"https://thekashimawoostore.bumpa.shop/products/white-hoodie/4720482?location=325597"},
{ id:5, name:"Black crop-top", price:"₦30,000", image:"/Black Crop-top.png", link:"https://thekashimawoostore.bumpa.shop/products/crop-top/4720498?location=325597"},
{ id:6, name:"White crop-top", price:"₦30,000", image:"/White Crop-top.png", link:"https://thekashimawoostore.bumpa.shop/products/crop-top/4720507?location=325597"},
{ id:7, name:"Double-Layered Sleeve Shirt", price:"₦55,000", image:"/Double Layered Sleeve Shirt.png", link:"https://thekashimawoostore.bumpa.shop/products/double-layered-sleeve-shirt/4720517?location=325597"},
{ id:8, name:"Black Tank", price:"₦35,000", image:"/Black Tank-top.png", link:"https://thekashimawoostore.bumpa.shop/products/black-tank/4720530?location=325597"},
{ id:9, name:"White Tank", price:"₦35,000", image:"/White Tank-top.png", link:"https://thekashimawoostore.bumpa.shop/products/white-tank/4720542?location=325597"},
{ id:10, name:"The Listening Experience Kampala (5 Yards)", price:"₦20,000", image:"/Kampala.png", link:"https://thekashimawoostore.bumpa.shop/products/the-listening-experience-kampala/4720572?location=325597"}
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
