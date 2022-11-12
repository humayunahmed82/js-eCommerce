import { getProduct } from "../api";
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

        return `<div class="container">
                    <div class="py-12 text-center">
                        <div class="text-slate-200 text-3xl font-semibold">${product.name}</div>
                    </div>
                </div>`;
    },
};

export default ProductScreen;
