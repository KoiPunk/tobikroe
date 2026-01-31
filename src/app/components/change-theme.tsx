export default function ChangeTheme() {
    return (
        <fieldset>
            <h3 className="text-center font-semibold mb-2">
                <legend>Site Style</legend>
            </h3>
        
            <div>
                <input type="radio" id="light" name="theme" value="light" checked />
                <label htmlFor="light">Light</label>
                <br/>
                
                <input type="radio" id="dark" name="theme" value="dark"/>
                <label htmlFor="dark">Dark</label>
                <br/>
                
                <input type="radio" id="marine" name="theme" value="marine"/>
                <label htmlFor="marine">Marine</label>
                <br/>
                
                <input type="radio" id="space" name="theme" value="space"/>
                <label htmlFor="space">Space</label>
                <br/>
                
                <input type="radio" id="katamari" name="theme" value="katamari"/>
                <label htmlFor="katamari">Katamari</label>
                <br/>
                
                <input type="radio" id="custom" name="theme" value="custom"/>
                <label htmlFor="custom">Custom</label>
            </div>
        </fieldset>
    )
}