### Basic example. All interactions

    <button className="demo-button">
        Click me
        <Tap scale fade waves />
    </button>


### Light theme

    <button className="demo-button demo-button_blue">
        Click me
        <Tap scale fade waves light />
    </button>


### Waves only

    <button className="demo-button">
        I will ripple
        <Tap waves />
    </button>


### Scale only

    <button className="demo-button">
        I will scale
        <Tap scale />
    </button>


### Fade only

    <button className="demo-button">
        I will fade
        <Tap fade />
    </button>


### Scale children

    <ul className="demo-list">
        <li className="demo-list__item">
            <Tap scale waves fade>
                <div className="demo-list__text">😎 Click me</div>
            </Tap>
        </li>
        <li className="demo-list__item">
            <Tap scale waves fade>
                <div className="demo-list__text">😉 Or click me</div>
            </Tap>
        </li>
    </ul>