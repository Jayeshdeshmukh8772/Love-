export interface ValentineDay {
  id: string;
  title: string;
  message: string;
  image?: string;
}

export interface StoryMilestone {
  id: string;
  title: string;
  description: string;
}

export interface ContentData {
  valentineDays: ValentineDay[];
  storyMilestones: StoryMilestone[];
  relationshipStartDate: string;
  secretLetter: string;
  proposalText: string[];
  voiceMessageUrl?: string;
  backgroundMusicUrl?: string;
}

export const defaultContent: ContentData = {
  valentineDays: [
    {
      id: 'rose',
      title: 'Rose Day',
      message: 'Every rose reminds me of you... beautiful, delicate, and worth every thorn. You are the most precious flower in my garden of life.',
      image: '/photos_data/RoseDay.png'
    },
    {
      id: 'propose',
      title: 'Propose Day',
      message: 'The day I realized my heart had found its home. Every moment with you feels like a dream I never want to wake up from.',
      image: '/photos_data/ProposeDay.png'
    },
    {
      id: 'chocolate',
      title: 'Chocolate Day',
      message: 'You are sweeter than any chocolate in this world. Your smile is my favorite treat, and your love is my addiction.',
      image: '/photos_data/ChocolateDay.png'
    },
    {
      id: 'teddy',
      title: 'Teddy Day',
      message: 'I wish I could hold you as tight as a teddy bear, keeping you close to my heart forever and never letting go.',
      image: '/photos_data/TeddyDay.png'
    },
    {
      id: 'promise',
      title: 'Promise Day',
      message: 'I promise to love you in every sunrise and cherish you in every sunset. Through storms and sunshine, my heart belongs to you. hm saath rah kr bhi saath rah nhi paate, tumse dur hokar bhi tumse bichhad nhi paate, tumko kaise bhool jaate, kuch to soch kr upar wale ne hame milaya hai, warna khud ko aaiyne me dekh kar tumhri tasweer nhi bana paate...!',
      image: '/photos_data/PromiseDay.png'
    },
    {
      id: 'hug',
      title: 'Hug Day',
      message: 'In your arms, I found my safe haven. Ek hi tamanna, Ek hi arzoo, Baho me panah me tere, Saari zindagi Guzaar du ..!',
      image: '/photos_data/HugDay.png'
    },
    {
      id: 'kiss',
      title: 'Kiss Day',
      message: 'Every kiss with you writes a new chapter in our love story. Your lips are poetry, and I could read them forever.(Our First kiss is due to those 2 seconds..!)',
      image: '/photos_data/KissDay.png'
    },
    {
      id: 'valentine',
      title: 'Valentine\'s Day',
      message: 'Today and every day, I choose you. You are my forever Valentine, my soul\'s perfect match, my everything.',
      image: '/photos_data/ValentineDay.png'
    }
  ],
  storyMilestones: [
    {
      id: 'first-talk',
      title: 'First Time We Talked',
      description: 'Hamari pehli baat yaad hai… aapne call kiya tha aur maine kaha tha Yes maam.Us waqt respect bhi tha, SSB ka josh bhi full on tha.Aaj SSB ka josh thoda thanda ho gaya hai,par aapko maam kehne ka mann aaj bhi karta hai… bas izzat se nahi, dil se.'
    },
    {
      id: 'first-smile',
      title: 'First Smile',
      description: 'Your smile lit up my world and I knew I wanted to be the reason for it every single day.Mujhe aaj bhi yaad hai, meri baat ke baad aap pehli baar muskuraayi thi aur kaha tha-Mujhe maam mat bolo, main bas tumhari senior hoon, mujhe mere naam se bula sakte ho. Us pal sirf aap muskuraayi nahi thi, mera dil bhi thoda sa pighal gaya tha. Tumhari ek muskurahat par dil apna sab kuch haar baitha, warna hum bhi kabhi itne aasaan se kisi ke nahi hue the.'
    },
    {
      id: 'first-fight',
      title: 'First Fight',
      description: 'Even in our disagreements, I learned that love means choosing each other, again and again. Aaj jo bhi ho rha hai I am damn Sure ki hm ye waqt sath me paar kr lenge. aur yahi bharosa mera pyaar hai ..!'
    },
    {
      id: 'realized',
      title: 'When I Realized I Love You',
      description: 'In a quiet moment, my heart whispered your name, and I knew you were my forever. log kehte hai, kyo apni mohobbat ka izhar unse nhi krte, maine kaha jo lafzo me baya ho jaye, sif itna pyaar hm unse nhi krte..!'
    },
    {
      id: 'today',
      title: 'Today',
      description: 'Every day with you is a gift. You make ordinary moments extraordinary. Sochta hu har kagaz pe teri taarif kru, fir khayal aya kahi padhne wala bhi tera deewana na ho jaye ..!'
    },
    {
      id: 'forever',
      title: 'Our Forever',
      description: 'This is just the beginning. Our story will continue through all of eternity. I will love you forever and ever. No matter what happens, I will always love you. <<< Majha tujhyavr khup Prem ahe >>>'
    }
  ],
  relationshipStartDate: '2022-09-05T00:01:30',
  secretLetter: `My Dearest Love,

Words feel too small to capture what you mean to me. You are the sunrise that brightens my darkest days.

Your laugh is my favorite sound, your happiness is my greatest goal, and your love is my biggest blessing.

Tum saath ho toh lagta hai
har kami poori si hai,
tum bin toh khushiyan bhi
adhuri si lagti hain.

I promise to stand by you through every season of life, to hold your hand through every storm, and to celebrate every joy with you. You are not just my love - you are my home, my peace, my everything.

Thank you for choosing me. Thank you for loving me. Thank you for being you.

Forever yours,
With all my heart ❤️`,
  proposalText: [
    'In every life...',
    'I will find you...',
    'And I will choose you...',
    'Again and again...',
    'Will you stay with me forever?',
    
    'Fizaa me mehekti shaam ho tum',
    'Pyaar me jhalakta jaam ho tum',
    'Seene me chupaye firte hai hm tumhari yaade',
    'Isi liye meri zindagi ka dusra naam ho tum'
  ]
};
