import { getProduct } from "../api";
import Rating from "../components/Rating";
import { parseRequestUrl } from "../utils";

const ProductScreen = {
    render: async () => {
        const request = parseRequestUrl();
        const product = await getProduct(request.id);

        if (product.error) {
            return `<div class="container">
                        <div class="py-12 text-center">
                            <div class="text-slate-200 text-3xl font-semibold">${product.error}</div>
                        </div>
                    </div>`;
        }

        return `

        <!-- Breadcrumb start -->
        <div class="py-5 border-b border-solid border-slate-300/10">
            <div class="container">
            <ul class="flex space-x-2 text-sm text-slate-200 font-semibold">
                    <li class="after:content-['/'] after:text-sm after:ml-1 relative last:after:content-['']">
                        <a class="hover:text-sky-400 transition-all" href="/#/">Home</a>
                    </li>
                    <li class="after:content-['/'] after:text-sm after:ml-1 relative last:after:content-['']">
                        <span>${product.name}</span>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Breadcrumb End -->

        <!-- Product Single Start -->        
        <div class="py-20">
            <div class="container">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <!-- Product Image Start -->     
                    <div class="border border-solid border-slate-300/10 rounded-lg overflow-hidden p-5">
                        <img class="rounded-lg" src="${product.image}" alt="${
            product.name
        }">
                    </div>
                    <!-- Product Image End -->        

                    <div class="">
                        <h2 class="text-slate-200 text-4xl font-semibold">${
                            product.name
                        }</h2>                        
                        <div class="pt-4">
                            ${Rating.render({
                                value: product.rating,
                                text: `${product.numberReview} Review`,
                            })}                        
                        </div>
                        <div class="text-slate-200 text-3xl font-semibold pt-5">
                            <span>${new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                            }).format(product.price)}</span>
                        </div>
                        <div class="text-slate-200 text-sm font-medium pt-10 ">
                            <span>Stock: ${
                                product.countInStock > 0
                                    ? `<span class="text-lime-400">In Stock</span>`
                                    : `<span class="text-red-700">Out of Stock</span>`
                            }</span>
                        </div>
                        <div class="pt-5">
                            <button class="disabled:opacity-50 text-md font-semibold text-slate-300 px-8 py-2 bg-sky-500 rounded-full" ${
                                product.countInStock > 0 ? "" : "disabled"
                            } >Add to Cart</button>
                        </div>
                        <div class=""></div>
                    </div>

                </div>
            </div>
        </div>
        <!-- Product Single End -->
                
        `;
    },
};

export default ProductScreen;
