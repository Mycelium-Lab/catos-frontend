import translateRegions from '@/json/translateRegions.json'
import neighborhoods from "@/json/neighborhoods.json"
import { AddressOptionString, DocumnetsString } from '@/types/address.type';
import { usePaperDataStore } from "@/stores/paperData"
import { usePassportDataStore } from '@/stores/passportData';
import { computed } from 'vue';

export const useNeighborhoodList = (addressOption:AddressOptionString, document:DocumnetsString) => {
    const index = computed(() => {
        const paperDataStore = usePaperDataStore();
        const pasportDataStore = usePassportDataStore()
        const values = Object.values(translateRegions);
        if (addressOption === "registration") {
           return values.indexOf(document === 'paper' ? paperDataStore.paperDTO.address.region : pasportDataStore.passportDTO.registration_address.region);
        } 
        else if (addressOption === "living") {
            return values.indexOf(document === 'paper' ? paperDataStore.paperDTO.address.region : pasportDataStore.passportDTO.living_address.region);
        }
        else return 0
    })

    const neighborhoodByRegion = computed(() => {
        const keys = Object.keys(translateRegions);
        const region = keys[index.value];
        // @ts-ignore
        return neighborhoods[region]
    })
    return {neighborhoodByRegion};
}