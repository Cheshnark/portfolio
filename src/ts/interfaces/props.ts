export interface NavBarProps {
  language: string,
  setLanguage: React.Dispatch<React.SetStateAction<string>>
}

export interface LanguageProp {
  language: string
}

export interface DrawerCompProps {
  shown: boolean,
  language: string,
  setLanguage: React.Dispatch<React.SetStateAction<string>>
}