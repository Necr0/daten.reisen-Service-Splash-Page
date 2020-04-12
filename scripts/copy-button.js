$(document).ready(function() {
    $(document).on('click', '[data-toggle="copy"][data-target]', function() {
        $this = $(this);
        try {
            document.querySelector(this.getAttribute("data-target")).select();
            if(!document.execCommand('copy'))
                throw new Error();
            this.____copy_button_original_text=this.____copy_button_original_text||$this.text();
            $this.text(this.getAttribute("data-success-text")||"Copied!");
            $this.focus();
            $this.one("blur",()=>{
                $this.text(this.____copy_button_original_text);
                delete this.____copy_button_original_text;
            });
        } catch (err) {
            this.____copy_button_original_text=this.____copy_button_original_text||$this.text();
            $this.text(this.getAttribute("data-failure-text")||"Failed!");
            $this.focus();
            $this.one("blur",()=>{
                $this.text(this.____copy_button_original_text);
                delete this.____copy_button_original_text;
            });
        }
    });

    $(document).on('focus', '[data-toggle="auto-select"]', function() {
        this.select();
    });
});