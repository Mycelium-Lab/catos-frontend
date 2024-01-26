import { computed } from "vue"
import { parse } from "tinyduration";
import { useLoanListStore } from "@/stores/loanList";
import { NANO_MULTIPLIER } from "@/utils/constants";

const useComputedPoolInfo = (pool: any) => {
    const interestRate = computed(() => {
       return pool?.millipercent ? pool?.millipercent / 1000 : 0
    })
    const interestRateString = computed(() => {
        return `1 день = ${interestRate.value}%`
     })

    const monthInterestRateString = computed(() => {
        const dayInterestRate = pool?.millipercent ? pool?.millipercent / 1000 : 0
        let freePeriodDay = parse(pool?.free_period).days !== undefined ? parse(pool?.free_period).days : 0
        return `30 дней = ${Number(dayInterestRate * (30 - freePeriodDay)).toFixed(2)}%`
    })

    const maxDuration = computed(() => {
        return parse(pool?.max_duration).days ? `${parse(pool?.max_duration).days} дн` : `${parse(pool?.max_duration).hours} ч`
      })

    const maxDurationValue = computed(() => {
        return parse(pool?.max_duration).days ? parse(pool?.max_duration).days : parse(pool?.max_duration).hours
      })

    const freePeriod = computed(() => {
        const period = parse(pool?.free_period).days !== undefined ? parse(pool?.free_period).days 
        : parse(pool?.free_period).hours !== undefined ? parse(pool?.free_period).hours
        : 0
        return period
    })
    const freePeriodString = computed(() => {
        return `${freePeriod.value} дн = 0%`
    })

    const createdTerm = computed(() => {
        const created = new Date(pool?.created_at)
        return `${created.getDate()}.${created.getMonth()+1}.${created.getFullYear()}`
    })

    const loansSummIssue = computed(() => {
        const poolLoan = useLoanListStore().poolLoan(pool?.id)
        return poolLoan.map((v) => v.amount / NANO_MULTIPLIER).reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0,
          );
    })

    const availableForLoan = computed(() => {
        const poolLoan = useLoanListStore().poolLoan(pool?.id)
        const onLoan = poolLoan.map((v) => v.amount / NANO_MULTIPLIER)
        const onLoanSumm = onLoan.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0,
          );
       return  (pool?.available_liquidity - onLoanSumm) / NANO_MULTIPLIER;
    })

    const sold = computed(() => {
        const poolLoan = useLoanListStore().poolLoan(pool?.id)
        const onSold = poolLoan.filter((v) => v.buyer_id && v.status === 'sold')
        const amount = onSold.map((v) => v.amount / NANO_MULTIPLIER).reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0,
          );
        return amount
    })

    const forSale = computed(() => {
        const poolLoan = useLoanListStore().poolLoan(pool?.id)
        const onForSale = poolLoan.filter((v) => v.status === 'for_sale')
        const amount = onForSale.map((v) => v.amount / NANO_MULTIPLIER).reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0,
          );
        return amount
    })

    const debt = computed(() => {
        const poolLoan = useLoanListStore().poolLoan(pool?.id)
        const onDebt = poolLoan.filter((v) => {
            const end = new Date(v.end);
            const now = new Date();
            return now > end
        })
        const amount = onDebt.map((v) => {
            const dif = (v.amount / NANO_MULTIPLIER) - ( v.paid_amount / NANO_MULTIPLIER)
            const overduePercent = v.overdue_millipercent / 1000
            return dif * overduePercent / 1000 + dif
        })
        const amountSumm = amount.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0,
          );
        return amountSumm
    })
      
    return {
        interestRate,
        monthInterestRateString,
        maxDuration,
        freePeriod,
        interestRateString,
        freePeriodString,
        createdTerm,
        maxDurationValue,
        loansSummIssue,
        availableForLoan,
        sold,
        forSale,
        debt
    }
}

export { useComputedPoolInfo }