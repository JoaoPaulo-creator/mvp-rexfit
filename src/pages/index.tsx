import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Head from 'next/head'
import Link from 'next/link'



export default function Home() {
  const products = [


    {
      id: 1,
      name: 'Whey Protein',
      price: '$148',
      imageSrc: 'https://lojamaxtitanium.vtexassets.com/arquivos/ids/155870/TopWheyPerformance_900g_Morango--2---1-.png?v=1761009250',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Whey Protein',
      
      price: '$135',
      imageSrc: 'https://lojamaxtitanium.vtexassets.com/arquivos/ids/155870/TopWheyPerformance_900g_Morango--2---1-.png?v=1761009250',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Whey Protein',
      
      price: '$189',
      imageSrc: 'https://lojamaxtitanium.vtexassets.com/arquivos/ids/155870/TopWheyPerformance_900g_Morango--2---1-.png?v=1761009250',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Whey Protein',
      price: '$135',
      imageSrc: 'https://lojamaxtitanium.vtexassets.com/arquivos/ids/155870/TopWheyPerformance_900g_Morango--2---1-.png?v=1761009250',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },

    {
      id: 6,
      name: 'Whey Protein',
      
      price: '$135',
      imageSrc: 'https://lojamaxtitanium.vtexassets.com/arquivos/ids/155870/TopWheyPerformance_900g_Morango--2---1-.png?v=1761009250',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 7,
      name: 'Whey Protein',
      
      price: '$135',
      imageSrc: 'https://lojamaxtitanium.vtexassets.com/arquivos/ids/155870/TopWheyPerformance_900g_Morango--2---1-.png?v=1761009250',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    
  ]
  return (
    <>
      <Head>
        <title>MVP - Ecommerce</title>
      </Head>
      
      

      <div className="bg-white">
      <a className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8' href="/teste">TESTE grid</a>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            
            <Link key={product.id} href={`product-detail/${product.id}`} className="group">
            
              <div className="w-48 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
            
              </div>
            
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            
            </Link>
          ))}
        </div>
      </div>
    </div>




    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
            >
              3
            </a>
            <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
              ...
            </span>
            <a
              href="#"
              className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              9
            </a>
            <a
              href="#"
              className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>

    </>
  )
}
