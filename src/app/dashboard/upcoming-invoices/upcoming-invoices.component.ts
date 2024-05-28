import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-upcoming-invoices',
  templateUrl: './upcoming-invoices.component.html',
  styleUrls: ['./upcoming-invoices.component.scss']
})
export class UpcomingInvoicesComponent {
  @Input() data: any;
  selectedInvoice: any;

  openPaymentModal(invoice: any) {
    this.selectedInvoice = invoice;
  }

  closePaymentModal() {
    this.selectedInvoice = null;
  }
}