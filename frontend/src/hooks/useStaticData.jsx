import { STATIC_TEXT_MAP } from "../Keys/StaticTextKeys"

export default function useStaticData() {
    
    const elements = document.querySelectorAll("[data-text-key]")
    
    elements.forEach(element => {
        element.textContent = STATIC_TEXT_MAP[element.dataset.textKey]   
    })

    return 
}