import { computed } from "vue"

const useComputedLoanInfo = (loan: any, freePeriod?: any) => {
    const duty = computed(() => {
        if(loan?.amount && loan?.paid_amount) {
          const dif = loan?.amount - loan?.paid_amount
          const overduePercent = loan?.overdue_millipercent / 100
          return dif * overduePercent / 100 + dif
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
        if(loan?.borrower?.passport?.birthdate || loan?.borrower?.birthdate) {
          const birthdate = loan?.borrower?.passport?.birthdate ? loan?.borrower?.passport?.birthdate : loan?.borrower?.birthdate
          const nowYear = new Date().getFullYear()  
          const yearBirth = birthdate.split('-')[0]
          return nowYear - Number(yearBirth)
        }
        else return ''
      })

      const interestRate = computed(() => {
        return loan?.millipercent ? loan?.millipercent / 100 : 0
      })

       const interestRateString = computed(() => {
        return `1 день = ${interestRate.value}%`
     })

      const duration = computed(() => {
        const start = new Date(loan?.start).getDate();
        const end = new Date(loan?.end).getDate();
        return `${Number(end) - Number(start)} дн`
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

    const freePeriodDate = computed(() => {
      const start = new Date(loan?.start)
        let lastFreeDay = start
        const limitDate = new Date(lastFreeDay.setDate(start.getDate() + freePeriod))
        return `${limitDate.getDate()}.${limitDate.getMonth() + 1}.${limitDate.getFullYear()}, ${limitDate.getHours()}:${limitDate.getMinutes()}`
    })

    const restDays = computed(() => {
      const end = new Date(loan?.end)
      const now = new Date();
      const dif = Number(end) - Number(now)
      return new Date(dif).getDate() - 1
    })

    const monthInterestRateString = computed(() => {
      const dayInterestRate = loan?.millipercent ? loan?.millipercent / 100 : 0
      return `30 дней = ${Number(dayInterestRate * (30 - freePeriod)).toFixed(2)}%`
    })

    const interestAccrualDate = computed(() => {
      const start = new Date(loan?.start)
      const accrualDate = new Date(start.setDate(start.getDate() + freePeriod))
      return `${accrualDate.getDate()}.${accrualDate.getMonth() + 1}.${accrualDate.getFullYear()}`
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
        freePeriodStatus,
        freePeriodDate,
        restDays,
        interestRateString,
        monthInterestRateString,
        interestAccrualDate
    }
}

export {useComputedLoanInfo}