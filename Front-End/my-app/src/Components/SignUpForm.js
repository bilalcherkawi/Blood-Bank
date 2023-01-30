
import React, { useState } from 'react';

const BloodBankForm = () => {
    const [hasDisease, setHasDisease] = useState(false);
    const [diseaseInfo, setDiseaseInfo] = useState('');

    const handleDiseaseChange = (event) => {
        setHasDisease(event.target.checked);
    };

    const handleDiseaseInfoChange = (event) => {
        setDiseaseInfo(event.target.value);
    }

    return (
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" />
            </label>
            <br />
            <label>
                Phone:
                <input type="tel" name="phone" />
            </label>
            <br />
            <label>
                Do you have any known diseases?
                <input
                    type="checkbox"
                    name="hasDisease"
                    checked={hasDisease}
                    onChange={handleDiseaseChange}
                />
            </label>
            {hasDisease && (
                <>
                    <br />
                    <label>
                        Please provide more information about your disease:
                        <textarea name="diseaseInfo" value={diseaseInfo} onChange={handleDiseaseInfoChange} />
                    </label>
                </>
            )}
            <br />
            <button type="submit">Sign up</button>
        </form>
    );
};

export default BloodBankForm;
