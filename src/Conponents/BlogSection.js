import React from "react";
import BlogImage1 from '../Assets/Images/Rectangle 14.png';
import BlogImage2 from '../Assets/Images/Rectangle 14 (1).png';
import BlogImage3 from '../Assets/Images/Rectangle 14 (2).png'



function BlogSection() {
    return (
        <div>
            <h1 class="blog">Blog</h1>
            <p class="blog_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="card_box2">
                    <img className="image" src={BlogImage1} alt=""></img>
                            <div class="content">
                                <div class="text_content">
                                    <h5 class="header_part">6 Strategies to Find Your Conference Keynote and Other Speakers</h5>
                                    <p class="first_paragraph">Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama
                                        Bostiketbos.
                                        Hanya perlu mengikuti beberapa langkah mudah.</p>
                                    <p class="second_paragraph">12 Mar - Jhon Doe</p>
                                </div>
                            </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="card_box2">
                        <img className="image" src={BlogImage2} alt=""></img>
                            <div class="content">
                                <div class="text_content">
                                    <h5 class="header_part">How Successfully Used Paid Marketing to Drive Incremental Ticket
                                        Sales</h5>
                                    <p class="first_paragraph">Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama
                                        Bostiketbos.
                                        Hanya perlu mengikuti beberapa langkah mudah.</p>
                                    <p class="second_paragraph">12 Mar - Jhon Doe</p>
                                </div>
                            </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="card_box2">
                    <img className="image" src={BlogImage3} alt=""></img>
                            <div class="content">
                                <div class="text_content">
                                    <h5 class="header_part">Introducing Workspaces: Work smarter, not harder with new navigation
                                    </h5>
                                    <p class="first_paragraph">Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama
                                        Bostiketbos.
                                        Hanya perlu mengikuti beberapa langkah mudah.</p>
                                    <p class="second_paragraph">12 Mar - Jhon Doe</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <button class="outline_blue_btn" type="button">Learn More</button>
        </div>
    )
}

export default BlogSection;