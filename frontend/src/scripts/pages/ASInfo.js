import asInfo from '@/assets/asInfo.json';

export default {
    data() {
        return {
            asInfoData: asInfo,
            activeCategory: null
        };
    },
    methods: {
        formattedName(name) {
            return name.replace(/\n/g, '<br>');
        },
        formattedAddress(address) {
            return address.replace(/\n/g, '<br>');
        },
        setActiveCategory(category) {
            this.activeCategory = category;
        }
    }
};