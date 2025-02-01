<script>
        document.addEventListener("DOMContentLoaded", function () {
            // Check if contact has been downloaded before
            if (!localStorage.getItem("contactDownloaded")) {
                // Create a hidden download link
                let link = document.createElement("a");
                link.href = "https://www.nepa-it-consulting.com/contact.vcf"; // Change to your .vcf file URL
                link.download = "contact.vcf";
                document.body.appendChild(link);

                // Trigger the download
                link.click();

                // Remove the link element after download
                document.body.removeChild(link);

                // Store flag in localStorage to prevent future downloads
                localStorage.setItem("contactDownloaded", "true");
            }
        });
</script>
