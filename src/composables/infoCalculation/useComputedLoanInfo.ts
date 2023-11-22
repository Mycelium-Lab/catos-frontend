import { computed } from "vue"

const useComputedLoanInfo = (loan: any) => {
    const duty = computed(() => {
        if(loan?.amount && loan?.paid_amount) {
          return loan?.amount - loan?.paid_amount
        }
        else {
          return ''
        }
      })

      const overdue = computed(() => {
        if(loan?.end) {
          const end = new Date(loan?.end);
          const now = new Date();
          const result = new Date(Number(now) - Number(end)).getDate()
          return result
        }
      })

      const localeTime = computed(() => {
        const date = new Date(loan?.start)
        return date.toLocaleString("ru-RU")
      })

      const age = computed(() => {
        if(loan?.borrower?.passport?.birthdate) {
          const nowYear = new Date().getFullYear()  
          const yearBirth = loan?.borrower?.passport?.birthdate.split('-')[0]
          return nowYear - Number(yearBirth)
        }
        else return ''
      })

    return {
        duty,
        overdue,
        localeTime,
        age
    }
}

export {useComputedLoanInfo}