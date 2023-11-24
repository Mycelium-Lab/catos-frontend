import { computed } from "vue"

const useComputedLoanInfo = (loan: any, freePeriod?: any) => {

    const duty = computed(() => {
        if(loan?.amount && loan?.paid_amount) {
          const dif = loan?.amount - loan?.paid_amount
          return loan?.overdue_millipercent / 100 * dif + dif
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

      const isOverdue = computed(() => {
        if(loan?.end) {
          const end = new Date(loan?.end);
          const now = new Date();
          return now > end
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

      const interestRate = computed(() => {
        return loan?.millipercent ? loan?.millipercent / 100 : 0
      })

      const duration = computed(() => {
        const start = new Date(loan?.start).getDay();
        const end = new Date(loan?.end).getDay();
        return `${Number(end) - Number(start)} дней`
      })

      const startTerm = computed(() => {
        const start = new Date(loan?.start);
        return `${start.getDate()}.${start.getMonth()+1}.${start.getFullYear()}`
      })

      const endTerm = computed(() => {
        const end = new Date(loan?.end);
        return `${end.getDate()}.${end.getMonth()+1}.${end.getFullYear()}, ${end.getHours()}:${end.getMinutes()}`
      })

      const freePeriodStatus = computed(() => {
        const start = new Date(loan?.start)
        const currentDay = Number(new Date().getTime())
        let lastFreeDay = start
        lastFreeDay.setDate(start.getDate() + freePeriod)
        const dif = currentDay > lastFreeDay.getTime()
        return dif ? 'закончен' : 'длится'
    })
    
    
    return {
        duty,
        overdue,
        localeTime,
        age,
        isOverdue,
        interestRate,
        duration,
        startTerm,
        endTerm,
        freePeriodStatus
    }
}

export {useComputedLoanInfo}