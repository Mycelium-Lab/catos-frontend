import { computed } from "vue"
import { parse } from "tinyduration";

const useComputedPoolInfo = (pool: any) => {
    const interestRate = computed(() => {
       return pool?.millipercent ? pool?.millipercent / 100 : 0
    })
    const interestRateString = computed(() => {
        return `1 день = ${interestRate.value}%`
     })

    const monthInterestRateString = computed(() => {
        const dayInterestRate = pool?.millipercent ? pool?.millipercent / 100 : 0
        let freePeriodDay = parse(pool?.free_period).days !== undefined ? parse(pool?.free_period).days : 0
        return `30 дней = ${Number(dayInterestRate * (30 - freePeriodDay)).toFixed(2)}%`
    })

    const maxDuration = computed(() => {
        return parse(pool?.max_duration).days ? `${parse(pool?.max_duration).days} дней` : `${parse(pool?.max_duration).hours} часов`
      })

    const freePeriod = computed(() => {
        const period = parse(pool?.free_period).days !== undefined ? parse(pool?.free_period).days 
        : parse(pool?.free_period).hours !== undefined ? parse(pool?.free_period).hours
        : 0
        return period
    })
    const freePeriodString = computed(() => {
        return `${freePeriod.value} дней = 0%`
    })

    const createdTerm = computed(() => {
        const created = new Date(pool?.created_at)
        return `${created.getDate()}.${created.getMonth()+1}.${created.getFullYear()}`
    })
      
    return {
        interestRate,
        monthInterestRateString,
        maxDuration,
        freePeriod,
        interestRateString,
        freePeriodString,
        createdTerm
    }
}

export { useComputedPoolInfo }