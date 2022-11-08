import data from "../data.js";

const HomeScreen = {
    render: () => {
        const { products } = data;

        return `
        <!-- Product start -->
        <div class="py-20">
            <div class="container">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                    ${products
                        .map(
                            (product) => `
                        <!-- Single Product start -->
                        <div class="single-product">
                            <div class="single-product-image rounded-t-md overflow-hidden">
                                <a class="block" href="/#/product/${product._id}"> <img src="${product.image}" alt="${product.name}"></a>
                            </div>
                            <div
                                class="single-product-content rounded-b-md p-4 border border-solid border-slate-300/10 space-y-3">
                                <h4 class=""><a
                                        class="text-slate-200 text-lg font-semibold transition-all hover:text-sky-400"
                                        href="/#/product/${product._id}">${product.name}</a></h4>
                                <div class="text-slate-200 text-sm font-semibold">
                                    <p>By: ${product.brand}</p>
                                </div>
                                <div class="text-slate-200 text-base font-semibold">
                                    <span class="">$${product.price}</span>
                                </div>
                            </div>
                        </div>
                        <!-- Single Product End -->
                    `
                        )
                        .join("")}            

                </div>
            </div>
        </div>
        <!-- Product End -->
        `;
    },
};

export default HomeScreen;
