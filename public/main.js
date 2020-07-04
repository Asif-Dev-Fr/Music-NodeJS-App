console.log('Client side');

const data = async () => {
    const response = await fetch('/api');
    const data = await response.json();
    console.log(data);
}

data();