import { computed } from "vue"
import { useLoanRequestListStroe } from "@/stores/loanRequestList"
import { parse } from "tinyduration";

const useComputedLoanRequestInfo = (loanRequest?: any, freePeriod?: any) => {
  const loanRequestListStore = useLoanRequestListStroe()
  const interestRate = computed(() => {
    return loanRequest?.millipercent ? loanRequest?.millipercent / 100 : 0
  })
  const interestRateString = computed(() => {
    return `1 день = ${interestRate.value}%`
  })
  
      const duration = computed(() => {
        if(parse(loanRequest?.duration).days !== undefined) {
           return parse(loanRequest?.duration).months 
            ? `${parse(loanRequest?.duration).months} мес`
            : parse(loanRequest?.duration).weeks
            ? `${parse(loanRequest?.duration).weeks} нед`
            : parse(loanRequest?.duration).days
            ? `${parse(loanRequest?.duration).days} дн`
            : parse(loanRequest?.duration).hours
            ? `${parse(loanRequest?.duration).hours} ч`
            : parse(loanRequest?.duration).minutes
            ? `${parse(loanRequest?.duration).minutes} мин`
            : `${parse(loanRequest?.duration).seconds} сек`
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
        
        const statusChangedTerm = computed(() => {
          if(loanRequest?.status_changed) {
            const created = new Date(loanRequest?.status_changed)
            return `${created.getDate()}.${created.getMonth()+1}.${created.getFullYear()}`
          }
        })
        const createdTerm = computed(() => {
          const created = new Date(loanRequest?.created_at)
          return `${created.getDate()}.${created.getMonth()+1}.${created.getFullYear()}`
        })

        const previouslyApproved = computed(() => {
          const loanRequest = loanRequestListStore.loanRequests.filter((v) => v.status === 'approved' || v.status === 'declined')
          return loanRequest
        })


    return {
      interestRate,
      interestRateString,
      duration,
      monthInterestRateString,
      durationValue, statusChangedTerm,
      createdTerm, previouslyApproved
    }
}

export {useComputedLoanRequestInfo}