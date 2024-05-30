import { SelectInputFieldProps } from '@typeSpec/common';

export const matchLowerCaseRegex = /[a-z]/g;
export const matchUpperCaseRegex = /[A-Z]/g;
export const matchNumbersRegex = /[0-9]/g;

export const adminRoles: SelectInputFieldProps[] = [
  {
    value: 'ADMIN',
    placeholder: 'Admin',
  },

  {
    value: 'RECORDS',
    placeholder: 'Records',
  },

  {
    value: 'CASHIER',
    placeholder: 'Cashier',
  },

  {
    value: 'HOSPITAL_ADMIN',
    placeholder: 'Hospital Admin',
  },

  {
    value: 'SITE_ADMIN',
    placeholder: 'Site Admin',
  },

  {
    value: 'HUMAN_RESOURCES',
    placeholder: 'Human Resources',
  },

  {
    value: 'HMO_ADMIN',
    placeholder: 'HMO Admin',
  },
];

export const availableTitles: SelectInputFieldProps[] = [
  {
    value: 'Dr.',
    placeholder: 'Dr.',
  },

  {
    value: 'Esq.',
    placeholder: 'Esq.',
  },

  {
    value: 'Hon.',
    placeholder: 'Hon.',
  },

  {
    value: 'Jr.',
    placeholder: 'Jr.',
  },

  {
    value: 'Mr.',
    placeholder: 'Mr.',
  },

  {
    value: 'Mrs.',
    placeholder: 'Mrs.',
  },

  {
    value: 'Ms.',
    placeholder: 'Ms.',
  },

  {
    value: 'Messrs.',
    placeholder: 'Messrs.',
  },

  {
    value: 'Mmes.',
    placeholder: 'Mmes.',
  },

  {
    value: 'Msgr.',
    placeholder: 'Msgr.',
  },

  {
    value: 'Prof.',
    placeholder: 'Prof.',
  },

  {
    value: 'Rev.',
    placeholder: 'Rev.',
  },

  {
    value: 'Rt.',
    placeholder: 'Rt.',
  },

  {
    value: 'Sr.',
    placeholder: 'Sr.',
  },

  {
    value: 'St.',
    placeholder: 'St.',
  },
];

export const titleSelectInput: SelectInputFieldProps[] = [
  {
    value: 'Mr.',
    placeholder: 'Mr.',
  },

  {
    value: 'Mrs.',
    placeholder: 'Mrs.',
  },

  {
    value: 'Miss.',
    placeholder: 'Miss.',
  },

  {
    value: 'Dr.',
    placeholder: 'Dr.',
  },

  {
    value: 'Rn.',
    placeholder: 'Rn.',
  },

  {
    value: 'Lpn.',
    placeholder: 'Lpn.',
  },

  {
    value: 'Pa.',
    placeholder: 'Pa.',
  },

  {
    value: 'Np.',
    placeholder: 'Np.',
  },

  {
    value: 'Ot.',
    placeholder: 'Ot.',
  },

  {
    value: 'Pt.',
    placeholder: 'Pt.',
  },

  {
    value: 'Slp.',
    placeholder: 'Slp.',
  },

  {
    value: 'Sw.',
    placeholder: 'Sw.',
  },
];

export const genderSelectInput: SelectInputFieldProps[] = [
  {
    value: 'Male',
    placeholder: 'Male',
  },

  {
    value: 'Female',
    placeholder: 'Female',
  },

  {
    value: 'Others',
    placeholder: 'Others',
  },
];

export const relationshipStatus: SelectInputFieldProps[] = [
  { value: 'SINGLE', placeholder: 'Single' },
  { value: 'IN_A_RELATIONSHIP', placeholder: 'In a Relationship' },
  { value: 'ENGAGED', placeholder: 'Engaged' },
  { value: 'MARRIED', placeholder: 'Married' },
  { value: 'DIVORCED', placeholder: 'Divorced' },
  { value: 'WIDOWED', placeholder: 'Widowed' },
  { value: 'SEPARATED', placeholder: 'Separated' },
  { value: 'COMPLICATED', placeholder: "It's Complicated" },
  { value: 'OPEN_RELATIONSHIP', placeholder: 'Open Relationship' },
  { value: 'CIVIL_UNION', placeholder: 'Civil Union' },
  { value: 'DOMESTIC_PARTNERSHIP', placeholder: 'Domestic Partnership' },
  { value: 'OTHERS', placeholder: 'Other' },
];

export const religions: SelectInputFieldProps[] = [
  {
    value: 'african_diaspora_religions',
    placeholder: 'African Diaspora Religions',
  },
  { value: 'african_neopaganism', placeholder: 'African Neopaganism' },
  { value: 'albanian', placeholder: 'Albanian' },
  { value: 'algard_wicca', placeholder: 'Algard Wicca' },
  { value: 'alexandrian_wicca', placeholder: 'Alexandrian Wicca' },
  { value: 'animism', placeholder: 'Animism' },
  { value: 'anuta', placeholder: 'Anuta' },
  { value: 'asatru', placeholder: 'Ásatrú' },
  { value: 'assamese', placeholder: 'Assamese' },
  {
    value: 'australian_aboriginal_religions',
    placeholder: 'Australian Aboriginal Religions',
  },
  { value: 'austroasiatic_religions', placeholder: 'Austroasiatic Religions' },
  { value: 'aztec_religion', placeholder: 'Aztec Religion' },
  { value: 'bagongshan', placeholder: 'Bagongshan' },
  { value: 'baháí_faith', placeholder: 'Baháʼí Faith' },
  { value: 'baloch', placeholder: 'Baloch' },
  { value: 'bambara', placeholder: 'Bambara' },
  { value: 'bantu', placeholder: 'Bantu' },
  { value: 'batak', placeholder: 'Batak' },
  { value: 'bemba', placeholder: 'Bemba' },
  { value: 'bábism', placeholder: 'Bábism' },
  { value: 'burusho', placeholder: 'Burusho' },
  { value: 'canaanite_religion', placeholder: 'Canaanite Religion' },
  { value: 'cassette_culture', placeholder: 'Cassette Culture' },
  { value: 'caodaism', placeholder: 'Cao Dai' },
  { value: 'caucasian_neopaganism', placeholder: 'Caucasian Neopaganism' },
  { value: 'caucasian_religions', placeholder: 'Caucasian Religions' },
  { value: 'celtic_polytheism', placeholder: 'Celtic Polytheism' },
  {
    value: 'celtic_reconstructionism',
    placeholder: 'Celtic Reconstructionism',
  },
  { value: 'celtic_religions', placeholder: 'Celtic Religions' },
  { value: 'cemetery_hound', placeholder: 'Cemetery Hound' },
  { value: 'chadian', placeholder: 'Chadian' },
  { value: 'cheondoism', placeholder: 'Cheondoism' },
  { value: 'chechen', placeholder: 'Chechen' },
  { value: 'chinese_folk_religion', placeholder: 'Chinese Folk Religion' },
  { value: 'circassian', placeholder: 'Circassian' },
  {
    value: 'church_and_school_of_wicca',
    placeholder: 'Church and School of Wicca',
  },
  { value: 'church_of_all_worlds', placeholder: 'Church of All Worlds' },
  { value: 'confucianism', placeholder: 'Confucianism' },
  { value: 'cottage_wicca', placeholder: 'Cottage Wicca' },
  {
    value: 'council_of_australian_wiccan_traditions',
    placeholder: 'Council of Australian Wiccan Traditions',
  },
  { value: 'crimean_tatars', placeholder: 'Crimean Tatars' },
  { value: 'croatian', placeholder: 'Croatian' },
  { value: 'cushitic', placeholder: 'Cushitic' },
  { value: 'dianic_feminist_wicca', placeholder: 'Dianic Feminist Wicca' },
  { value: 'dianic_wicca', placeholder: 'Dianic Wicca' },
  { value: 'dongbaism', placeholder: 'Dongbaism' },
  { value: 'druidry', placeholder: 'Druidry' },
  { value: 'druze', placeholder: 'Druze' },
  { value: 'dyotheism', placeholder: 'Dyotheism' },
  { value: 'eclectic_wicca', placeholder: 'Eclectic Wicca' },
  { value: 'egyptian', placeholder: 'Egyptian' },
  { value: 'enets', placeholder: 'Enets' },
  { value: 'english', placeholder: 'English' },
  { value: 'estonian', placeholder: 'Estonian' },
  { value: 'estonian_neopaganism', placeholder: 'Estonian Neopaganism' },
  { value: 'ethiopian', placeholder: 'Ethiopian' },
  { value: 'ethiopians', placeholder: 'Ethiopians' },
  { value: 'european', placeholder: 'European' },
  { value: 'fante', placeholder: 'Fante' },
  { value: 'feri_tradition', placeholder: 'Feri Tradition' },
  { value: 'finland', placeholder: 'Finland' },
  { value: 'finnish', placeholder: 'Finnish' },
  { value: 'finnish_neopaganism', placeholder: 'Finnish Neopaganism' },
  { value: 'folk_religions', placeholder: 'Folk Religions' },
  { value: 'french', placeholder: 'French' },
  { value: 'fula', placeholder: 'Fula' },
  { value: 'gardnerian_wicca', placeholder: 'Gardnerian Wicca' },
  { value: 'ganda', placeholder: 'Ganda' },
  { value: 'german', placeholder: 'German' },
  {
    value: 'germanic_reconstructionism',
    placeholder: 'Germanic Reconstructionism',
  },
  { value: 'goldi', placeholder: 'Goldi' },
  { value: 'greek', placeholder: 'Greek' },
  { value: 'hawaiian_religion', placeholder: 'Hawaiian Religion' },
  { value: 'heathenry', placeholder: 'Heathenry' },
  {
    value: 'hellenic_polytheistic_reconstructionism',
    placeholder: 'Hellenic Polytheistic Reconstructionism',
  },
  { value: 'hellenism', placeholder: 'Hellenism' },
  { value: 'hinduism', placeholder: 'Hinduism' },
  { value: 'honmon_bukkyō', placeholder: 'Honmon Butsuryū-shū' },
  { value: 'hungarian', placeholder: 'Hungarian' },
  { value: 'hungarian_neopaganism', placeholder: 'Hungarian Neopaganism' },
  { value: 'hutu', placeholder: 'Hutu' },
  { value: 'iban', placeholder: 'Iban' },
  { value: 'icelandic', placeholder: 'Icelandic' },
  { value: 'igbo', placeholder: 'Igbo' },
  { value: 'inca_religion', placeholder: 'Inca Religion' },
  { value: 'indigenous_religions', placeholder: 'Indigenous Religions' },
  { value: 'indonesian', placeholder: 'Indonesian' },
  { value: 'inuit', placeholder: 'Inuit' },
  { value: 'iranian_folk_religion', placeholder: 'Iranian Folk Religion' },
  { value: 'iranian_religions', placeholder: 'Iranian Religions' },
  { value: 'iraqi_kurdistan', placeholder: 'Iraqi Kurdistan' },
  { value: 'irish', placeholder: 'Irish' },
  { value: 'islam', placeholder: 'Islam' },
  { value: 'italian', placeholder: 'Italian' },
  { value: 'jainism', placeholder: 'Jainism' },
  { value: 'jōdo_shinshū', placeholder: 'Jōdo Shinshū' },
  { value: 'jōdo_shū', placeholder: 'Jōdo Shū' },
  { value: 'judaism', placeholder: 'Judaism' },
  { value: 'juche', placeholder: 'Juche' },
  { value: 'kalenjin', placeholder: 'Kalenjin' },
  { value: 'kanuri', placeholder: 'Kanuri' },
  { value: 'kemetic', placeholder: 'Kemetic' },
  { value: 'khasi', placeholder: 'Khasi' },
  { value: 'khakas', placeholder: 'Khakas' },
  { value: 'khanty', placeholder: 'Khanty' },
  { value: 'khanty_religion', placeholder: 'Khanty Religion' },
  { value: 'khmer_religions', placeholder: 'Khmer Religions' },
  { value: 'khoikhoi', placeholder: 'Khoikhoi' },
  { value: 'komi_religion', placeholder: 'Komi Religion' },
  { value: 'komi-permyak_religion', placeholder: 'Komi-Permyak Religion' },
  { value: 'komi-zyrian_religion', placeholder: 'Komi-Zyrian Religion' },
  { value: 'korean', placeholder: 'Korean' },
  { value: 'krishnaism', placeholder: 'Krishnaism' },
  { value: 'kurdish', placeholder: 'Kurdish' },
  { value: 'kurdish_yazidis', placeholder: 'Kurdish Yazidis' },
  { value: 'kutenai', placeholder: 'Kutenai' },
  { value: 'lahu_religion', placeholder: 'Lahu Religion' },
  { value: 'lapita_culture', placeholder: 'Lapita Culture' },
  { value: 'latvian', placeholder: 'Latvian' },
  { value: 'latvian_neopaganism', placeholder: 'Latvian Neopaganism' },
  { value: 'laz_religion', placeholder: 'Laz Religion' },
  { value: 'lengilu', placeholder: 'Lengilu' },
  { value: 'lithuanian', placeholder: 'Lithuanian' },
  { value: 'lithuanian_neopaganism', placeholder: 'Lithuanian Neopaganism' },
  { value: 'maasai', placeholder: 'Maasai' },
  { value: 'macedonian', placeholder: 'Macedonian' },
  { value: 'mangarevan', placeholder: 'Mangarevan' },
  { value: 'maori_religion', placeholder: 'Māori Religion' },
  { value: 'marathi', placeholder: 'Marathi' },
  { value: 'mauritian_hinduism', placeholder: 'Mauritian Hinduism' },
  { value: 'maya_religion', placeholder: 'Maya Religion' },
  { value: 'mazatec', placeholder: 'Mazatec' },
  { value: 'mazatec_religion', placeholder: 'Mazatec Religion' },
  { value: 'mazatec_shamanism', placeholder: 'Mazatec Shamanism' },
  {
    value: 'mazatec_traditional_religion',
    placeholder: 'Mazatec Traditional Religion',
  },
  {
    value: 'medieval_christian_mysticism',
    placeholder: 'Medieval Christian Mysticism',
  },
  { value: 'melanesian_religions', placeholder: 'Melanesian Religions' },
  { value: 'mende', placeholder: 'Mende' },
  { value: 'miao_religion', placeholder: 'Miao Religion' },
  { value: 'micronesian_religions', placeholder: 'Micronesian Religions' },
  { value: 'mizoram', placeholder: 'Mizoram' },
  { value: 'modern_mystery_schools', placeholder: 'Modern Mystery Schools' },
  { value: 'tibetan_buddhism', placeholder: 'Tibetan Buddhism' },
  { value: 'theravada_buddhism', placeholder: 'Theravada Buddhism' },
  { value: 'mahayana_buddhism', placeholder: 'Mahayana Buddhism' },
  { value: 'vajrayana_buddhism', placeholder: 'Vajrayana Buddhism' },
  { value: 'shugendō', placeholder: 'Shugendō' },
  { value: 'nichiren_buddhism', placeholder: 'Nichiren Buddhism' },
  { value: 'humanistic_buddhism', placeholder: 'Humanistic Buddhism' },
  { value: 'pure_land_buddhism', placeholder: 'Pure Land Buddhism' },
  { value: 'confucianism', placeholder: 'Confucianism' },
  { value: 'yiguandao', placeholder: 'Yiguandao' },
  { value: 'taoism', placeholder: 'Taoism' },
  { value: 'occultism', placeholder: 'Occultism' },
  { value: 'paganism', placeholder: 'Paganism' },
  { value: 'neo-paganism', placeholder: 'Neo-Paganism' },
  { value: 'hinduism', placeholder: 'Hinduism' },
  { value: 'sikhism', placeholder: 'Sikhism' },
  { value: 'jainism', placeholder: 'Jainism' },
  { value: 'buddhism', placeholder: 'Buddhism' },
  { value: 'bahaism', placeholder: 'Bahaism' },
  { value: 'judaism', placeholder: 'Judaism' },
  { value: 'christianity', placeholder: 'Christianity' },
  { value: 'zoroastrianism', placeholder: 'Zoroastrianism' },
];

// export const USER_SERVICE_EXCHANGE = 'zeek-clinic-user-service';
