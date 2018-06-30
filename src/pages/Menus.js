import React, {Component} from 'react';
import '../css/all.css';
import '../css/menu.css';
import Nav from './nav';
import Header from './header';
import Footer from './footer';
import wine from '../images/33584514_10160384824840627_7918868401794056192_n.jpg';
import cheeseplate from '../images/cheeseplate.jpg';
import hummus from '../images/hummus.jpg';
import flatbread from '../images/flatbread.jpg';




export default class menu extends Component {
    render () {
        return (
            <body>
            <div className='page'>
            <Header />
            <Nav />
                <div className='appwidth'>
                    <div className='appetizers'>
                        <h3>Appetizers</h3>
                        <div className='apps'>
                            <div className='grouped'>
                                <div className='line'>
                                    <div className='food'>
                                        Organic Baguette with Oil Balsamic
                                    </div>
                                    <div className='cost'>
                                        $4
                                    </div>
                                </div>
                                <div className='line'>
                                    <div className='food'>
                                        Baked Cream Cheese and Pesto with Flatbread Crisps
                                    </div>
                                    <div className='cost'>
                                        $7
                                    </div>
                                </div>
                                <div className='line'>
                                    <div className='food'>
                                        Cheesy Rosemary Garlic Bread with Basil Marinara
                                    </div>
                                    <div className='cost'>
                                        $6
                                    </div>
                                </div>
                                <div className='line'>
                                    <div className='food'>
                                        Smoked Wild-Caught Alaskan King Salmon and aged White Cheddar w/ Flatbread Crisps                                     </div>
                                    <div className='cost'>
                                        $8
                                    </div>
                                </div>
                                <div className='line'>
                                    <div className='food'>
                                        Caprese Crostini - Fresh Mozzarella, Basil and Heirloom Tomato
                                    </div>
                                    <div className='cost'>
                                        $8
                                    </div>
                                </div>
                                <div className='line'>
                                    <div className='food'>
                                        Onion Brulee Crostini with Jarlsburg Swiss
                                    </div>
                                    <div className='cost'>
                                        $6
                                    </div>
                                </div>
                                <div className='line'>
                                    <div className='food'>
                                        Dried fig, Clover Honey and Brie Crostini
                                    </div>
                                    <div className='cost'>
                                        $7
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='apps'>
                            <div className='grouped'>
                                <div className='line'>
                                    <div className='food'>
                                        Hummus Platter – Roasted Pepper Hummus and toasted pita w/ herbed feta, olives, cucumber, Sweet baby bells and pepperoncini
                                    </div>
                                    <div className='cost'>
                                        $14
                                    </div>
                                </div>
                                <div className='line'>
                                    <div className='food'>
                                        Bleu candy – Gorgonzola & Goat Cheese with Candied Jalapenos & Spiced Cranberry-Orange Marmalade  (served with organic rosemary baguette)
                                    </div>
                                    <div className='cost'>
                                        $8
                                    </div>
                                </div>
                                <div className='line'>
                                    <div className='food'>
                                        Baked Brie w/ Honey & Almonds, Onion Brulee, or Port-Berry Compote (served with organic rosemary baguette)
                                    </div>
                                    <div className='cost'>
                                        $9
                                    </div>
                                </div>
                                <div className='line'>
                                    <div className='food'>
                                        Caprese Antipasto Platter – Pepperoncini, Olives, Salami, Crackers and Fresh Mozzarella with Basil and Heirloom Tomato drizzled with Balsamic
                                    </div>
                                    <div className='cost'>
                                        $12
                                    </div>
                                </div>
                                <div className='line'>
                                    <div className='food'>
                                        Assorted Cheese Plate with Salami & spiced orange- Berry Compote
                                    </div>
                                    <div className='cost'>
                                        Half $8 Whole $14
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <br />

                <div className="foodImg">
                    <div><img src={hummus} className='foodie'/></div>
                    <div><img src={cheeseplate} className='foodie'/></div>
                    <div><img src={wine} className='foodie'/></div>
                    <div><img src={flatbread} className='foodie' /></div>
                </div>



                <br />
                <div className='appwidth'>
                    <div className='appetizers'>
                        <h3>Flatbreads</h3>
                        <div className='apps'>
                            <div className='grouped'>
                                <div className='line'>
                                    <div className='food'>
                                        All $10
                                    </div>
                                </div>
                                <div className='line'>
                                    <div className='food'>
                                        Arcy’s Favorite – Herbed chicken breast with basil, fresh mozzarella, tomato and marinara
                                    </div>
                                </div>
                                <div className='line'>
                                    <div className='food'>
                                        Green Bird - Herbed Chicken Breast w/ Cream Cheese, Organic Basil, pesto and Artesian Greens
                                    </div>
                                </div>
                                <div className='line'>
                                    <div className='food'>
                                        Get Your Goat - Sausage & Goat Cheese w/ Sun-Dried Tomato, greens and pesto Spread
                                    </div>
                                </div>
                                <div className='line'>
                                    <div className='food'>
                                        The Seattle – Onion brulee, mild Italian sausage and cream cheese with house made Candied Jalapenos
                                    </div>
                                </div>
                                <div className='line'>
                                    <div className='food'>
                                        King’s Crown - Smoked Wild-Caught Alaskan King Salmon w/ Brie, Herbed Chardonnay Butter, Heirloom tomato & Artesian Greens
                                    </div>
                                </div>
                                <div className='line'>
                                    <div className='food'>
                                        Taste of Italy - Salami & Fresh Mozzarella w/ Pesto, Heirloom Tomato, Basil and Pine nuts
                                    </div>
                                </div>
                                <div className='line'>
                                    <div className='food'>
                                        The Carnivore - Bacon, Sausage and Salami w/ aged White Cheddar and Organic Marinara
                                    </div>
                                </div>
                                <div className='line'>
                                    <div className='food'>
                                        Choke on This! - Artichoke, house made Jalapeno and Roasted Chicken Breast w/ Onion Brulee Spead and American bleu cheese
                                    </div>
                                </div>
                                <div className='line'>
                                    <div className='food'>
                                        Bleu Pig - Bacon, American bleu cheese and Sundried Tomato w/ Artesian Greens and Onion Brulee Spread
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            </body>
        )
    }
};
