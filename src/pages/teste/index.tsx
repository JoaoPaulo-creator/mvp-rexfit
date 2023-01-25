export default function Teste(){
    return (
        <>
            {/* <div className="container mx-auto my-16 h-48">
                <div className="items-stretch grid-cols-1 text-black bg-midnight h-80 bg-slate-50 px-4">
                    <div>Coluna 1</div>
                </div>
            </div> */}
            <div className="container mx-auto my-16 h-48 gap-0.5">
                
                <div className="grid grid-cols-3">

                    {/* div que contem os cards */}
                    <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
                        <img
                            className="max-h-64 min-h-64 w-full" 
                            src="https://lojamaxtitanium.vtexassets.com/arquivos/ids/155870/TopWheyPerformance_900g_Morango--2---1-.png?v=1761009250"
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Whey Protein 3w</div>
                            <div className="font-semibold text-sm mb-2">R$ 150</div>
                            <p className="text-gray-700 text-base">Suplemento de proteina</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                    </div>
                    
                    <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
                        <img
                            className="max-h-64 min-h-64 w-full" 
                            src="https://lojamaxtitanium.vtexassets.com/arquivos/ids/155870/TopWheyPerformance_900g_Morango--2---1-.png?v=1761009250"
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Whey Protein 3w</div>
                            <div className="font-semibold text-sm mb-2">R$ 150</div>
                            <p className="text-gray-700 text-base">Suplemento de proteina</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                    </div>

                    <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
                        <img
                            className="max-h-64 min-h-64 w-full" 
                            src="https://lojamaxtitanium.vtexassets.com/arquivos/ids/155870/TopWheyPerformance_900g_Morango--2---1-.png?v=1761009250"
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Whey Protein 3w</div>
                            <div className="font-semibold text-sm mb-2">R$ 150</div>
                            <p className="text-gray-700 text-base">Suplemento de proteina</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                    </div>


                </div>
            </div>

            

        </>
    )
}