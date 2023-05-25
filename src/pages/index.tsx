import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


const producs = [
  {
  id: 1,
  name: 'Whey Protein 80%',
  description: 'Suplemento de proteína',
  price: '100,00',
  image: "https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/185/produto-selo-topo-new-v3.png"
  },
  {
  id: 2,
  name: 'Creme de Avela 500g',
  description: 'Creme de Avela',
  price: '29,99',
  image: 'https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/73/creme-de-avela-500g-growth-supplements.png'
  },
  {
  id: 3,
  name: 'Creatina',
  description: 'Aminoacido',
  price: '79,92',
  image: "https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/72/creatina-monohidratada-growth.png"
  },
  {
  id: 4,
  name: 'Whey Protein 80%',
  description: 'Suplemento de proteína',
  price: '100,00',
  image: "https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/185/produto-selo-topo-new-v3.png"
  },
  {
  id: 5,
  name: 'Whey Protein 80%',
  description: 'Suplemento de proteína',
  price: '100,00',
  image: "https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/185/produto-selo-topo-new-v3.png"
  },
  {
  id: 6,
  name: 'Creme de Avela 500g',
  description: 'Creme de Avela',
  price: '29,99',
  image: 'https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/73/creme-de-avela-500g-growth-supplements.png'
  },
  {
  id: 7,
  name: 'Creatina',
  description: 'Aminoacido',
  price: '79,92',
  image: "https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/72/creatina-monohidratada-growth.png"
  },
  {
  id: 8,
  name: 'Whey Protein 80%',
  description: 'Suplemento de proteína',
  price: '100,00',
  image: "https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/185/produto-selo-topo-new-v3.png"
  },
]


export default function Home() {

  /* <a href="https://www.google.com/"></a> */
  
  return (
    <>
      <Head>
        <title>MVP - Ecommerce</title>
      </Head>
      
      {/* Aqui é container onde vai estar meus cards */}
      <div className="max-w-5xl mx-auto mt-6 mb-6">
        {/* Aqui é onde eu preciso passar as classes do flex-box */}
        <div className="flex flex-wrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ld:grid-cols-4 bg-gray-200">
          
          {producs.map((product) => (
            <div key={product.id}>
              <Link href={`/product-detail/${product.id}`}>
              <div className="mx-4 my-4 gap-4 cursor-pointer border border-gray-200">
                <img width={400} height={400} src={product.image} alt="" className="w-full h-64 object-cover"/>
          
                <div className="p-4">
                  
                  <h2 className="text-lg font-medium">{product.name}</h2>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="text-red-600 font-medium">R$ {product.price}</p>
                </div>
            </div>
          </Link>
            </div>
          ))}
          
          {/* Acima renderizo meus cards */}
          
        </div>
      </div>

    </>
  )
}
