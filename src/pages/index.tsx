import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

  /* <a href="https://www.google.com/"></a> */
  
  return (
    <>
      <Head>
        <title>MVP - Ecommerce</title>
      </Head>
      
      {/* Aqui é container onde vai estar meus cards */}
      <div className="max-w-5xl mx-auto">
        {/* Aqui é onde eu preciso passar as classes do flex-box */}
        <div className="flex flex-wrap grid grid-cols-4 ">
          
          
          {/* Aqui eu renderizo meus cards */}
          <Link href="/product-detail">
            <div className="mx-4 my-4 gap-4 cursor-pointer border border-gray-200">
              <img src="whey.webp" alt="" className="w-full h-64 object-cover"/>
        
              <div className="p-4">
                
                <h2 className="text-lg font-medium">Whey Protein 3w</h2>
                <p className="text-gray-600">Suplemento de proteína</p>
                <p className="text-red-600 font-medium">R$ 199,99</p>
              </div>
          </div>
          </Link>
          
          <Link href="/product-detail">
            <div className="mx-4 my-4 gap-4 cursor-pointer border border-gray-200">
              <img src="whey.webp" alt="" className="w-full h-64 object-cover"/>
        
              <div className="p-4">
                
                <h2 className="text-lg font-medium">Whey Protein 3w</h2>
                <p className="text-gray-600">Suplemento de proteína</p>
                <p className="text-red-600 font-medium">R$ 199,99</p>
              </div>
          </div>
          </Link>

          <Link href="/product-detail">
            <div className="mx-4 my-4 gap-4 cursor-pointer border border-gray-200">
              <img src="whey.webp" alt="" className="w-full h-64 object-cover"/>
        
              <div className="p-4">
                
                <h2 className="text-lg font-medium">Whey Protein 3w</h2>
                <p className="text-gray-600">Suplemento de proteína</p>
                <p className="text-red-600 font-medium">R$ 199,99</p>
              </div>
          </div>
          </Link>

          <Link href="/product-detail">
            <div className="mx-4 my-4 gap-4 cursor-pointer border border-gray-200">
              <img src="whey.webp" alt="" className="w-full h-64 object-cover"/>
        
              <div className="p-4">
                
                <h2 className="text-lg font-medium">Whey Protein 3w</h2>
                <p className="text-gray-600">Suplemento de proteína</p>
                <p className="text-red-600 font-medium">R$ 199,99</p>
              </div>
          </div>
          </Link>

          <Link href="/product-detail">
            <div className="mx-4 my-4 gap-4 cursor-pointer border border-gray-200">
              <img src="whey.webp" alt="" className="w-full h-64 object-cover"/>
        
              <div className="p-4">
                
                <h2 className="text-lg font-medium">Whey Protein 3w</h2>
                <p className="text-gray-600">Suplemento de proteína</p>
                <p className="text-red-600 font-medium">R$ 199,99</p>
              </div>
          </div>
          </Link>

          <Link href="/product-detail">
            <div className="mx-4 my-4 gap-4 cursor-pointer border border-gray-200">
              <img src="whey.webp" alt="" className="w-full h-64 object-cover"/>
        
              <div className="p-4">
                
                <h2 className="text-lg font-medium">Whey Protein 3w</h2>
                <p className="text-gray-600">Suplemento de proteína</p>
                <p className="text-red-600 font-medium">R$ 199,99</p>
              </div>
          </div>
          </Link>

          <Link href="/product-detail">
            <div className="mx-4 my-4 gap-4 cursor-pointer border border-gray-200">
              <img src="whey.webp" alt="" className="w-full h-64 object-cover"/>
        
              <div className="p-4">
                
                <h2 className="text-lg font-medium">Whey Protein 3w</h2>
                <p className="text-gray-600">Suplemento de proteína</p>
                <p className="text-red-600 font-medium">R$ 199,99</p>
              </div>
          </div>
          </Link>

          <Link href="/product-detail">
            <div className="mx-4 my-4 gap-4 cursor-pointer border border-gray-200">
              <img src="whey.webp" alt="" className="w-full h-64 object-cover"/>
        
              <div className="p-4">
                
                <h2 className="text-lg font-medium">Whey Protein 3w</h2>
                <p className="text-gray-600">Suplemento de proteína</p>
                <p className="text-red-600 font-medium">R$ 199,99</p>
              </div>
          </div>
          </Link>

          {/* Acima renderizo meus cards */}
          
        </div>
      </div>

    </>
  )
}
