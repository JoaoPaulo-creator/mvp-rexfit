export default function ProductDetail(){
    return (

        <div className="max-w-3xl mx-auto">
            <div className="w-full my-4">
                <img src="whey.webp" alt="product-image" className="w-full h-64 object-cover max-h-fit"/>
                <div className="p-4">
                <h2 className="text-lg font-medium">WHEY PROTEIN</h2>
                <p className="text-gray-600">asdasd</p>
                <p className="text-red-600 font-medium">$123123123</p>
                </div>
            </div>
            <div className="my-4">
                <h2 className="text-lg font-medium">Product Details</h2>
                <p className="text-gray-600">descricao do produto</p>
            </div>
        <div className="my-4">
            <h2 className="text-lg font-medium">Product Features</h2>
            <ul className="text-gray-600">
            
            </ul>
        </div>
    </div>
    )
}