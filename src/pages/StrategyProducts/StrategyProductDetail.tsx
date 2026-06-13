import { useParams } from "react-router";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import StrategyProductDefaultInputs from "../../components/form/product-form/form-elements/strategy-product/StrategyProductDefaultInputs";
import StrategyProductInputGroupRight from "../../components/form/product-form/form-elements/strategy-product/StrategyProductInputGroupRight";
import StrategyProductGeneralInfo from "../../components/form/product-form/form-elements/strategy-product/StrategyProductGeneralInfo";

const StrategyProductDetail = () => {
  const { productStore } = useStore();
  const {
    loadStrategyProductDetail,
    editStrategyProduct,
    strategyProductDetail,
  } = productStore;
  const { id } = useParams();

  // Load product detail when id changes
  useEffect(() => {
    if (id) {
      loadStrategyProductDetail(+id);
    }
  }, [id, loadStrategyProductDetail]);

  // Cleanup effect - reset form when component unmounts
  useEffect(() => {
    return () => {
      // Reset form when leaving the page to avoid showing old data
      productStore.resetStrategyProductForm();
    };
  }, [productStore]);

  if (!id) {
    return <div>Không tìm thấy sản phẩm</div>;
  }

  // 3. Save handler
  const handleSave = async () => {
    const result = await editStrategyProduct(+id, productStore.strategyProductForm);
    if (result) {
      loadStrategyProductDetail(+id);
    }
  };

  return (
    <div>
      <PageMeta
        title="TCT Homemart Data Management"
        description={"Sản phẩm " + strategyProductDetail.autoBarcode}
      />
      <span>
        Sản phẩm{" "}
        <PageBreadcrumb
          pageTitle={
            strategyProductDetail.autoBarcode
              ? strategyProductDetail.autoBarcode
              : "..."
          }
        />
      </span>
      <div className="grid grid-cols-1 gap-6">
        <div className="col-span-8 mb-6">
          <StrategyProductGeneralInfo 
            key={strategyProductDetail.id} 
            product={strategyProductDetail} 
          />
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <div className="col-span-8 space-y-6">
          <StrategyProductDefaultInputs 
            key={strategyProductDetail.id} 
            product={strategyProductDetail} 
          />
        </div>
        <div className="col-span-8 xl:col-span-4 space-y-6">
          <StrategyProductInputGroupRight
            key={strategyProductDetail.id}
            product={strategyProductDetail}
          />
        </div>
      </div>
      <div className="mt-6 flex justify-start">
        <button
          onClick={handleSave}
          disabled={productStore.loading}
          className={`inline-flex items-center justify-center rounded-lg bg-[#334355] font-semibold px-6 py-2.5 text-center text-sm text-white hover:bg-[#283849] focus:outline-none focus:ring-2 focus:bg-[#283849]/50 disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {productStore.loading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Đang xử lý...
            </>
          ) : (
            "Lưu thay đổi"
          )}
        </button>
      </div>
    </div>
  );
};

export default observer(StrategyProductDetail);
