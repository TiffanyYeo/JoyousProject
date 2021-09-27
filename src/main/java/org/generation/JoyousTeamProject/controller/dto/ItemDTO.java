package org.generation.JoyousTeamProject.controller.dto;

public class ItemDTO {

    private String name;
    private String description;
    private String imageURL;
    private String category;
    private double price;

    public ItemDTO(String name, String description, String imageURL, String category, double price)
    {
        this.name = name;
        this.description = description;
        this.imageURL = imageURL;
        this.category = category;
        this.price = price;
    }

    public String getName() { return name;}

    public void setName(String name) {this.name = name;}

    public String getDescription() { return description;}

    public void setDescription( String description) { this.description = description;}

    public String getImageURL() {return imageURL;}

    public void setImageURL(String imageURL) {this.imageURL = imageURL;}

    public void setCategory(String category) {this.category = category;}

    public String getCategory() { return category;}

    public void setPrice(double price) {this.price = price;}

    public double getPrice() {return price;}

}
