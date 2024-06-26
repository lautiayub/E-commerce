import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { NavigationContext } from "../../Context/NavigationContext"
import CloseIcon from "../../Icons/CloseIcon"


const ProductDetail = () => {

    const { productToShow } = useContext(ShoppingCartContext)

    const { closeProductDetail, isProductDetailOpen } = useContext(NavigationContext)


    return (

        <aside
            className={`${isProductDetailOpen ? 'flex' : 'hidden'} overflow-hidden w-[360px] h-[calc(100vh-80px)] top-[68px]  flex-col fixed  right-0 border border-black rounded-r-lg bg-white `} >
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl ">Detail</h2>
                <div
                    onClick={() => closeProductDetail()} className="cursor-pointer">
                    <CloseIcon h='6' w='6' />
                </div>
            </div>

            <figure className="px-6 flex justify-center items-center">
                <img src={productToShow.image} alt={productToShow.title} className=" max-h-[280px] " />
            </figure>
            <p className="flex flex-col p-6 ">
                <span className="font-medium text-2xl">${productToShow.price}</span>
                <span className="font-medium text-md" >{productToShow.title}</span>
                <span className="font-light  overflow-y-auto text-sm">{productToShow.description}</span>
            </p>

        </aside>
    )
}
export default ProductDetail