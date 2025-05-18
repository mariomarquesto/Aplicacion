using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class Product
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public required string Name { get; set; }

        [MaxLength(500)]
        public required string Description { get; set; }

        [Range(0, (double)decimal.MaxValue)]
        public decimal Price { get; set; }

        [Url]
        public required string PictureUrl { get; set; }

        public required string Type { get; set; }

        public required string Brand { get; set; }

        [Range(0, int.MaxValue)]
        public int QuantityInStock { get; set; }
    }
}
