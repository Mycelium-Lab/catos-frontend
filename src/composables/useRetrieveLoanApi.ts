import { ref } from "vue";
import { retrieveLoan } from "@/api/loans.api";

export const useRetrieveLoanApi = async (loan_id: number) => {
    let remain = ref<number>();
    let accrued = ref<number>();

    await retrieveLoan(loan_id)
        .then(res => {
            console.log(res);
            if (res.status === 200) {
                remain.value = res.data.remain;
                accrued.value = res.data.accrued;
            }
        })
        .catch(err => console.error(err))

    return { remain, accrued }
}