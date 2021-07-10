using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Entities
{
    public class Answer
    {
        public Guid Id { get; set; }
        public string Text { get; set; }
        public bool IsCorrect { get; set; }

        [ForeignKey("Question")]
        public Guid QuestionId { get; set; }
        public Question Question { get; set; }
    }
}
