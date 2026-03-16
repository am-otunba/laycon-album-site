"use client"

import Image from "next/image"

const products = [
  { id:1, name:"Black T-Shirt", price:"₦45,000", image:"/Black T-shirt.png", link: 'https://thelayconstore.bumpa.shop/products/ksmw-t-shirt/4499475?location=313151'},
  { id:2, name:"White T-Shirt", price:"₦45,000", image:"/White T-shirt.png", link: 'https://thelayconstore.bumpa.shop/products/ksmw-t-shirt/4499475?location=313151'},
  { id:3, name:"Black Hoodie", price:"₦55,000", image:"/Black Hoodie.png", link:'https://thelayconstore.bumpa.shop/products/ksmw-hoodie/4503053?location=313151'},
  { id:4, name:"White Hoodie", price:"₦55,000", image:"/White Hoodie.png", link:'https://thelayconstore.bumpa.shop/products/ksmw-hoodie/4503053?location=313151'},
  { id:5, name:"Black crop-top", price:"30,000", image:"/Black Crop-top.png", link:'https://thelayconstore.bumpa.shop/products/ksmw-crop-top/4501094?location=313151'},
  { id:6, name:"White crop-top", price:"₦30,000", image:"/White Crop-top.png", link:'https://thelayconstore.bumpa.shop/products/ksmw-crop-top/4501094?location=313151'},
  { id:7, name:"Double-Layered Sleeve Shirt", price:"₦55,000", image:"/Double Layered Sleeve Shirt.png", link:'https://thelayconstore.bumpa.shop/products/ksmw-double-layered-sleeve-shirt/4503022?location=313151'},
  { id:8, name:"Black Tank", price:"₦35,000", image:"/Black Tank-top.png", link:'https://thelayconstore.bumpa.shop/products/ksmw-tank-top/4501176?location=313151'},
  { id:9, name:"White Tank", price:"₦35,000", image:"/White Tank-top.png", link:'https://thelayconstore.bumpa.shop/products/ksmw-tank-top/4501176?location=313151'},
  { id:10, name:"KSMW Vinyl", price:"₦35,000", image:"/Vinyl.png", link:'https://thelayconstore.bumpa.shop/products/ksmw-vinyl/4503876?location=313151'}
]

const Shop = () => {
  return (
    <>
      <section className="bg-[#F1CB5E40] py-10 px-4 sm:px-6 lg:px-20">

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">

          {products.map((product) => (
            <div key={product.id} 
            className="cursor-pointer"
            onClick={() => window.open(product.link, "_blank")}
            >

              {/* Image */}
              <div className="group p-2 border w-full h-[250px] flex flex-col items-center bg-[#ffffff] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="group-hover:scale-105 transition duration-300 pt-6 w-[90%] max-w-[180px] h-auto"
                />
              </div>

              {/* Info */}
              <div className="bg-[#000000] p-2 text-center">
                <h3 className="font-medium text-[#ffffff] text-sm sm:text-base md:text-lg">
                  {product.name}
                </h3>
                <p className="text-[#ffffff] text-sm sm:text-base md:text-lg">
                  {product.price}
                </p>
              </div>

            </div>
          ))}

        </div>

      </section>
    </>
  )
}

export default Shop