import { computed } from "vue"
import { parse } from "tinyduration";

const useComputedLoanRequestInfo = (loanRequest: any) => {
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

    return {
        duration
    }
}

export {useComputedLoanRequestInfo}