import { useFilterDataStore } from "@/stores/filter";
import { Pool } from "@/types/pool.type";
import {useComputedPoolInfo} from "@/composables/infoCalculation/useComputedPoolInfo"
import { LoansResponse, LoansBoughtResponse } from "@/types/loan.types";
import { useComputedLoanInfo } from "@/composables/infoCalculation/useComputedLoanInfo";


export const conditionsFilterPool = (pool: Pool) => {
    const filterDataStore = useFilterDataStore();
    //console.log(pool.id)
    //console.log('Ставка:', pool.millipercent, 'Беспроцентный:', parseFreePeriod(pool), 'Срок:', parseDuration(pool), 'Невозврат:', pool.overdue_millipercent)
    //console.log(filterDataStore.poolsFilter)

    const conditionsOfMillipercent = filterDataStore.poolsFilter.minMillipercent <= pool.millipercent / 100 && pool.millipercent / 100 <= filterDataStore.poolsFilter.maxMillipercent
    const conditionsOfFreePeriod = filterDataStore.poolsFilter.minFreePeriod <= parseFreePeriod(pool) && parseFreePeriod(pool)  <= filterDataStore.poolsFilter.maxFreePeriod
    const conditionsOfDuration = filterDataStore.poolsFilter.minDuration <= parseDuration(pool) && parseDuration(pool)  <= filterDataStore.poolsFilter.maxDuration
    const conditionsOfOverudeMillipercent = filterDataStore.poolsFilter.minOverdueMillipercent / 100 <= pool.overdue_millipercent / 100 && pool.overdue_millipercent / 100 <= filterDataStore.poolsFilter.maxOverdueMillipercent
    const conditionsOfAvailableLiquidity = filterDataStore.poolsFilter.minPrice <= pool.available_liquidity && pool.available_liquidity  <= filterDataStore.poolsFilter.maxPrice
    /*console.log(
        conditionsOfMillipercent,
        conditionsOfFreePeriod,
        conditionsOfDuration,
        conditionsOfOverudeMillipercent
    )*/
    return {
        conditionsOfMillipercent,
        conditionsOfFreePeriod,
        conditionsOfDuration,
        conditionsOfOverudeMillipercent,
        conditionsOfAvailableLiquidity
    }

}

export const conditionsFilterLoans = (loan: LoansResponse | LoansBoughtResponse ) => {
    const filterDataStore = useFilterDataStore();

    const conditionsOfMillipercent = filterDataStore.poolsFilter.minMillipercent <= loan.millipercent / 100 && loan.millipercent / 100 <= filterDataStore.poolsFilter.maxMillipercent
    const conditionsOfDuty = filterDataStore.poolsFilter.minDuty <= parseDuty(loan) && parseDuty(loan) <= filterDataStore.poolsFilter.maxDuty
    const conditionsOfExpired = filterDataStore.poolsFilter.minExpired <= getExpired(loan) && getExpired(loan)  <= filterDataStore.poolsFilter.maxExpired
    const conditionsOfDbt = filterDataStore.poolsFilter.minPrice <= loan.price && loan.price  <= filterDataStore.poolsFilter.maxPrice

    return {
        conditionsOfMillipercent,
        conditionsOfDuty,
        conditionsOfExpired,
        conditionsOfDbt,
    }

}


const parseFreePeriod = (pool: Pool) => {
    return useComputedPoolInfo(pool).freePeriod.value
}

const parseDuration = (pool: Pool) => {
    return useComputedPoolInfo(pool).maxDurationValue.value
}

const parseDuty = (loan: LoansResponse | LoansBoughtResponse) => {
    return useComputedLoanInfo(loan).duty.value
}

const getExpired = (loan: LoansResponse | LoansBoughtResponse) => {
    if (loan?.end) {
          const end = new Date(loan?.end);
          const now = new Date();
          const result = new Date(Number(now) - Number(end)).getDate();
          return result;
    }
}