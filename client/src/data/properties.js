// Shared property data across the site
import heroBg      from '../assets/images/hero_bg.png'
import westBengal  from '../assets/images/west_bengal.png'
import goa         from '../assets/images/goa.png'
import odisha      from '../assets/images/odisha.png'

// Google AIDA-hosted images from existing stitch (already curated)
const rajasthan  = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxZKaVH3jnFUcnnccZut1UxRQACJ1d9htv5cAZm6DoqvG9gv1fA0IXLZq7p9ihetyQu3B9j_B86xhDzmRkI59JvS-5u4YZcB9j22nBTUH1rBVQwvyEZIeUD7Xd7cpw6Cix-gAondK26xgcZzEk5gHQy4GEGas1Aw1sLryR1BjRyA6Z86RCCnX0EJOGktEzmRU_kN1SZN7crvQX6Z05BCQErObSxjei29DcIYic3QPVOtLhVxRV9cjPjgQkI8reUiVYhHOAZtVd4r0j'
const uttarakhand = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4bijA68wtAS6ESJZBbLXYujJ0cnSDd4VQAjMBlvawszdqV62Esk0cPELk_xnWIj2lSbka6BwpiEwLCVj7Y1kh_KpSuiCCKNrjbLjz5aqlaJDN4d7K0BS13kG8KvQoDjUoBMUGRIxVj-gZpHHF82lXHn2YK8DhXharRimT_ySx0qQhq5xqyHk5OANf5O49K2_0nEowt8ZXwe3H39SvMK_XRY7HBT-FRr9H1mFTNvxiKnQLb0LSZ7rTWkG61rLqamQXp1_vPl7i47OQ'
const himachal   = 'https://lh3.googleusercontent.com/aida-public/AB6AXuATz5i0it7w8NlxjDHruhZQP1__jME4Ch9QAVMPRwhquxK1k9sUvZ9-mjNu2CNgb8q4s8iuFTAPgixU7ipekx1escUhjD4MKSD3Y7OvRT6Q2_gy5vtefXc-qInBJNiIlQIdhcMTiIDBQQQfLFdR1l0jtNWO28mYc0aM9AwcGVDyVNfBQDblEQSrWfuh1_65OLJI5KJpt7BGat19KDh5L5l-AeDIVN4IeXyAHeyBPDR4ka5ba8rNwd1iBoDOmeXCpGy_YP6WzLrxTxiy'
const kerala     = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsFO6mVyLoU7sIlV2-J3wHIUxKMbBWRFaL_feF6-6fq80pG1bN4_EI-q_4kUqtO-mjWr_E6S68zqB9MyV__AOYZSKm2sr3hZlsoH-Y1DbYunIROxz3MROKI26UEc2LLN8Hdydv3hPwiMgKShUQeIDTa3iMMHHvTPWwlszM6RBzY8DDEh1VAahQs_m6vtDZs4MtpW-6UebtC17VPfWnmTTigkVTluBBEgEp-np6TJ3Qmz-vpvdKuH8RwR82vvqwpsaKc2ZGXp3PNqfW'
const karnataka  = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDqUJGrzkojtl0FoypwjCp2jIshWJcc1IgskfWGYlNMmWUWMjqKlxEFanvISvjoPZ2_kF9cz_CfA2Zgcs-LYtDytBFM9cgIIxP4qghvsqsFsQWXGS6_ObFuj8JkrwqCCbtjDj1f7dFgGJK94keZkclJhlEPxJqCuhNXEXNhp-rKX0zaxUngmwCqdv43MvCMMB7eBIO327FLpI3d_YiSkDMRHEfQunUtUjBKOvfqoexG4OCFyGmRTGtS7zW_ECeB6fCEKCEG4ccHFsS'
const ladakh     = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvZdGtN-jqiXutni0WaMY201GXi92q87vpbyVR6L9t2_-M2aJcNrHck6pqHfVSsWXpZ3Y-DVg3OUOVDRx_3SGgpsG9itKcb-CcoKHV4IFPL0qA-stLW4O3fGoHZUo-E5ECyUx4rqNKwfM1Vgh-cHmHRWwm6zQiID_ONQAZd5uDWDOfj7aXlmpaCxcdDcrllKtQZN-3d9eXq40RBlqNh-GX12SLivz5Z8Iw72q-wG4bmYNZ0WlGPRlFLqZmAwIfVmEdRR31HRfEij-b'
const lakshadweep= 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqUv5xefuTc1kW7-wg7O0EHsQdPIEQEPdCFt0neeVekbSLKwVPYx9vA-qaxkiOuzpLAHSCZ-uZFYL9poSpVBtMafOJCoC7ROnAcd3E8FXvOjc-r4PhEFtSMEm48GBXvMLMneRV-3IDSqnatSlKw89Pv_SmS4tpoP8u_c8-na9wxX5Mb-8y9bpFuBgHJN_QpIMwn8VPJCEoCGGcs1vYGaofwlJywIsyxRakcKxMTlBhkoR02IXMtcj1JgJfQ3Pss6ypYD2EJYUGbkhj'
const dubai      = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCCrA36yjH7925BLSbGJKnKhyut7MrVXy_OdSPV4-FtxThh0hoEliBP7pNeo6E4HBZ5FrlY13v-Hp5kkswBUDgOjaLvyxD5xcv7C_qW4TD2DdNAjKDr9t-vq4UWJMPAJchpx8O5VfkReWu8H-HCSv3Jh6wjb9iTQPoKfk5UFZsXchPo7afthCHCHzX6feNFQADBJgi7S0MAeMqFxlIcB6Jor6wrg1aOKVR5MSP7P8pH_EdOFYVkLRKwUHJfQAVvhRxunPtNMzRhRRi'
const maldives   = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBshCWibGZ94SL8gp059_NgOo4HCzdxFD6yPL30RD2QMF3FDPIfYQQGS4D0mItSwpdtzL-ajzjc1gX2PW5wlZV-JFPeDFaq4icnTRhnCCQBd6H-22GXK4deD97Lmilo7nI70rj8uQh9xv5qpxFPIlLhxoyqQz5bXQYVWp_hrgy1HdRU7BC_G1IMHC4mF5euZimSwbdxJCHdYH60x_Bip-X8IZQaV0OQNZZF_UxujTXDeWyzp1oegjBF_H2l14kfhiXKamUPhkceb1tl'
const bali       = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7ezBZnS0MpJpJtRfPZ5qWaoLStmpl9QpCYDrEqYJ-sSYTNDET_jMSrRehYTXztVu8K0d6A7XDO8QYQjhgtUKEFHXr_yBDIe-rQstNHsCsEdGEoJiT0ezX1Rot-gRHgeWz5P-aWmrxTpaw'
const thailand   = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6jm5C8TCdcx_VaEmLX5xxnDKgw417xiZBYNLmqPXDJCDGHrdVTubZ6uVFk22ejMLCASLsNW0sorkdd-Spc0xHs3SLiGF87m9F_m4X00Uns_-ucu-ECtpCoWH0S46ZYD5VTLt35HcMo2vy__KFeXwZXxbkQ12W79XzBtLQgNQdDI7x4HRaB_YcjPnv4IPkUjtULdKyRKSTlmmYY0sz1JWOlOFXHhkLuqbMt5G6ZTPr3zoA47YAmOAHrdkPW54Qsjh30lS6_vOPNFAS'

export { heroBg }

export const regions = {
  north: {
    id: 'north',
    title: 'The North',
    subtitle: 'HIGHLANDS & HERITAGE',
    properties: [
      { id: 'rajasthan',   name: 'Rajasthan',   region: 'THAR DESERT',  image: rajasthan,   tagline: 'Where desert sands meet golden heritage and royal whispers.',          badge: 'LAUNCHING SOON' },
      { id: 'uttarakhand', name: 'Uttarakhand', region: 'HIMALAYAS',    image: uttarakhand, tagline: 'Celestial heights meet the whispering pines of the lower Himalayas.',   badge: 'LAUNCHING SOON' },
      { id: 'himachal',    name: 'Himachal',    region: 'ALPINE NORTH', image: himachal,    tagline: 'Alpine dreams etched into the rugged ridges of the North.',             badge: 'LAUNCHING SOON' },
    ]
  },
  south: {
    id: 'south',
    title: 'The South',
    subtitle: 'EMERALD COASTLINES',
    properties: [
      { id: 'kerala',    name: 'Kerala',    region: 'BACKWATERS',    image: kerala,    tagline: 'An emerald sanctuary where time dissolves in the backwaters.', badge: 'LAUNCHING SOON' },
      { id: 'karnataka', name: 'Karnataka', region: 'COFFEE TRAILS', image: karnataka, tagline: 'Raw granite monoliths meet the coffee-scented mists of Coorg.',  badge: 'LAUNCHING SOON' },
      { id: 'goa',       name: 'Goa',       region: 'ARABIAN SEA',   image: goa,       tagline: 'A cliffside sanctuary where the Arabian Sea meets the sky.',    badge: 'LAUNCHING SOON' },
    ]
  },
  east: {
    id: 'east',
    title: 'The East',
    subtitle: 'RIVERS & HERITAGE',
    properties: [
      { id: 'bengal', name: 'West Bengal', region: 'HERITAGE ESTATES', image: westBengal, tagline: 'Colonial grandeur reimagined amongst ancient banyans and still ponds.', badge: 'LAUNCHING SOON' },
      { id: 'odisha', name: 'Odisha',      region: 'PURI COASTLINE',   image: odisha,     tagline: 'Where temple horizons meet the untouched shores of the Bay of Bengal.', badge: 'LAUNCHING SOON' },
    ]
  },
  west: {
    id: 'west',
    title: 'The West',
    subtitle: 'COAST & WILDERNESS',
    properties: [
      { id: 'goa-west',    name: 'Goa',        region: 'COASTAL GOA',      image: goa,       tagline: 'Sun-soaked cliffside retreats above the shimmering Arabian Sea.',    badge: 'LAUNCHING SOON' },
      { id: 'maharashtra', name: 'Maharashtra', region: 'SAHYADRI RANGES',  image: karnataka, tagline: 'Dramatic valley estates where the Western Ghats meet monsoon skies.',  badge: 'LAUNCHING SOON' },
    ]
  },
  ut: {
    id: 'ut',
    title: 'Union Territories',
    subtitle: 'THE SOVEREIGN ESCAPES',
    properties: [
      { id: 'ladakh',      name: 'Ladakh',      region: 'HIGH ALTITUDE DESERT', image: ladakh,      tagline: 'Stark beauty at the roof of the world, where silence is the ultimate luxury.', badge: 'LIMITED COLLECTION' },
      { id: 'lakshadweep', name: 'Lakshadweep', region: 'CORAL ATOLLS',         image: lakshadweep, tagline: 'Untouched coral atolls and turquoise horizons.',                              badge: 'LAUNCHING SOON' },
    ]
  }
}

export const international = [
  { name: 'DUBAI',     year: '2025', image: dubai },
  { name: 'MALDIVES',  year: '2025', image: maldives },
  { name: 'BALI',      year: '2026', image: bali },
  { name: 'THAILAND',  year: '2026', image: thailand },
]

export const allProperties = Object.values(regions).flatMap(r =>
  r.properties.map(p => ({ ...p, regionTitle: r.title }))
)
