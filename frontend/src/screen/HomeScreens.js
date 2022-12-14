import Rating from "../components/Rating.js";

import axios from "axios";

const HomeScreen = {
    render: async () => {
        const response = await axios({
            url: "http://localhost:5000/api/products",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response || response.statusText !== "OK") {
            return `<div class="container">
                        <div class="py-12 text-center">
                            <div class="text-slate-200 text-3xl font-semibold">Error in getting Data</div>
                        </div>
                    </div>`;
        }
        const products = await response.data;

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
                            <div class="single-product-image rounded-t-md overflow-hidden relative">
                                <a class="block" href="/#/product/${
                                    product._id
                                }"> <img src="${product.image}" alt="${
                                product.name
                            }"></a>

                            
                            <span class="absolute top-0 left-0">
                            ${
                                product.countInStock > 0
                                    ? `<span class="bg-lime-400 rounded-tl-md rounded-br-md text-sm font-medium text-slate-800 block px-3 py-2">In Stock</span>`
                                    : `<span class="bg-red-700 rounded-tl-md rounded-br-md text-sm font-medium text-slate-300 block px-3 py-2">Out of Stock</span>`
                            }
                            </span>
                            </div>
                            <div
                                class="single-product-content rounded-b-md p-4 border border-solid border-slate-300/10 space-y-3">
                                <h4 class=""><a
                                        class="text-slate-200 text-lg font-semibold transition-all hover:text-sky-400"
                                        href="/#/product/${product._id}">${
                                product.name
                            }</a></h4>
                               
                                ${Rating.render({
                                    value: product.rating,
                                    text: `${product.numberReview} Review`,
                                })}
                                
                                <div class="text-slate-200 text-sm font-semibold">
                                    <p>By: ${product.brand}</p>
                                </div>
                                <div class="text-slate-200 text-base font-semibold">
                                    <span class="">${new Intl.NumberFormat(
                                        "en-US",
                                        {
                                            style: "currency",
                                            currency: "USD",
                                        }
                                    ).format(product.price)}</span>
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
