import { useState } from 'react';

const useSmoothLoading = () => {
    
    const [ visible, setVisible ] = useState(false);  

    return [
        visible ? 'visible' : 'hidden',
        () => setVisible(true)
    ];
}

export default useSmoothLoading;