import { computed } from "vue"
import { parse } from "tinyduration";

const useComputedLoanRequestInfo = (loanRequest: any) => {
  const interestRate = computed(() => {
    return loanRequest?.millipercent ? loanRequest?.millipercent / 100 : 0
  })
  const interestRateString = computed(() => {
    return `1 день = ${interestRate.value}%`
  })
      const duration = computed(() => {
        if(parse(loanRequest?.duration).days !== undefined) {
           return parse(loanRequest?.duration).months 
            ? `${parse(loanRequest?.duration).months} месяца`
            : parse(loanRequest?.duration).weeks
            ? `${parse(loanRequest?.duration).weeks} недель`
            : parse(loanRequest?.duration).days
            ? `${parse(loanRequest?.duration).days} дней`
            : parse(loanRequest?.duration).hours
            ? `${parse(loanRequest?.duration).hours} часов`
            : parse(loanRequest?.duration).minutes
            ? `${parse(loanRequest?.duration).minutes} минут`
            : `${parse(loanRequest?.duration).seconds} секунд`
        }
        return parse(loanRequest?.duration).days !== undefined ? parse(loanRequest?.duration).days : 0
      })

   
        const durationValue = computed(() => {
          if(parse(loanRequest?.duration).days !== undefined) {
             return parse(loanRequest?.duration).months 
              ? parse(loanRequest?.duration).months
              : parse(loanRequest?.duration).weeks
              ? parse(loanRequest?.duration).weeks
              : parse(loanRequest?.duration).days
              ? parse(loanRequest?.duration).days
              : parse(loanRequest?.duration).hours
              ? parse(loanRequest?.duration).hours
              : parse(loanRequest?.duration).minutes
              ? parse(loanRequest?.duration).minutes
              : parse(loanRequest?.duration).seconds
          }
          return parse(loanRequest?.duration).days !== undefined ? parse(loanRequest?.duration).days : 0
        })

        const monthInterestRateString = computed(() => {
          const dayInterestRate = loanRequest?.millipercent ? loanRequest?.millipercent / 100 : 0
          return `30 дней = ${Number(dayInterestRate * (30 - freePeriod)).toFixed(2)}%`
        })
  
        

    return {
      interestRate,
      interestRateString,
      duration,
      monthInterestRateString,
      durationValue
    }
}

export {useComputedLoanRequestInfo}