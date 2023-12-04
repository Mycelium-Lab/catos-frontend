import { usePoolListStore } from "@/stores/poolList"
import { useLoanListStore } from "@/stores/loanList"
import { parse } from "tinyduration";
import { computed } from "vue"

export const useComputedCreditorInfo = (creditorId: number) => {
    const allPoolsCount = computed(() => {
        return usePoolListStore().creditorPools(creditorId).length
    })
    const activePoolsCount = computed(() => {
        return usePoolListStore().creditorPools(creditorId).filter((v) => v.status === 'active').length
    })

    const midMillipercent = computed(() => {
        const millipercent = usePoolListStore().creditorPools(creditorId).map((v) => v.millipercent / 100)
        const millipercentSumm = millipercent.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0,
        )
          return (millipercentSumm / millipercent.length).toFixed(3)
    })

    const midOverdueMillipercent = computed(() => {
        const overdueMillipercent = usePoolListStore().creditorPools(creditorId).map((v) => v.overdue_millipercent / 100)
        const overdueMillipercentSumm = overdueMillipercent.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0,
        )
          return (overdueMillipercentSumm / overdueMillipercent.length).toFixed(3)
    })

    const midFreePeriod = computed(() => {
        const freePeriod = usePoolListStore().creditorPools(creditorId).map((v) => v.free_period)
        const parsedFreePeriod = freePeriod.map((v) => {
            const period = parse(v)?.days ? parse(v)?.days : parse(v)?.hours ? 0 : 0
            return period
        })
        const parsedFreePeriodSUmm = parsedFreePeriod.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0,
        )
          return Math.floor(parsedFreePeriodSUmm / freePeriod.length)
    })

    const midRoi = computed(() => {
        const roi = usePoolListStore().creditorPools(creditorId).map((v) => v.roi)
        const roiSumm = roi.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0,
        )
          return (roiSumm / roi.length).toFixed(3)
    })

    const revenueSumm = computed(() => {
        return usePoolListStore().creditorPools(creditorId).map((v) => v.revenue).reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0,
          );
    })

    const allLiquiditySumm = computed(() => {
        return usePoolListStore().creditorPools(creditorId).map((v) => v.all_liquidity).reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0,
          );
    })

    const availableLiquiditySumm = computed(() => {
        return usePoolListStore().creditorPools(creditorId).map((v) => v.available_liquidity).reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0,
          );
    })

    const loansIssue = computed(() => {
        return useLoanListStore().creditorLoan(creditorId).length
    })
    const loansSummIssue = computed(() => {
        return useLoanListStore().creditorLoan(creditorId).map((v) => v.amount).reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0,
          );
    })
    return {
        allPoolsCount,
        activePoolsCount,
        loansSummIssue,
        loansIssue,
        allLiquiditySumm,
        availableLiquiditySumm,
        midRoi,
        midMillipercent,
        midFreePeriod,
        midOverdueMillipercent,
        revenueSumm
    }
}