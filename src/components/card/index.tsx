export default function Card(){
    return (
  
      <div className="mx-4 my-4 cursor-pointer border border-gray-200">
        <a href="/product-detail"></a>
        <img src="whey.webp" alt="" className="w-full h-64 object-cover"/>
  
        <div className="p-4">
          <h2 className="text-lg font-medium">Whey Protein 3w</h2>
          <p className="text-gray-600">Suplemento de proteína</p>
          <p className="text-red-600 font-medium">R$ 199,99</p>
        </div>
      </div>
    )
  }