import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export const Tos = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
                Peddler Apps Terms and Conditions
            </Typography>

            <Box>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span" variant="h6">1. Acceptance of Terms</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            By registering as a member and using Peddler Apps, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, including any future modifications.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography component="span" variant="h6">2. Membership Registration</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component="div">
                            <ul>
                                <li><strong>Eligibility:</strong> You must be at least 18 years old to register as a member.</li>
                                <li><strong>Account Information:</strong> You agree to provide accurate and complete information during registration and to keep this information up-to-date.</li>
                                <li><strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel3-content"
                        id="panel3-header"
                    >
                        <Typography component="span" variant="h6">3. Buying, Selling, and Trading</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component="div">
                            <ul>
                                <li><strong>Listing Items:</strong> Members can list effects pedals and accessories for sale or trade. Listings must be accurate and not misleading.</li>
                                <li><strong>Transactions:</strong> All transactions must be conducted within the guidelines provided by Peddler Apps. Payments must be made through our secure payment system.</li>
                                <li><strong>Shipping:</strong> Members are responsible for shipping items promptly and securely as per the guidelines.</li>
                                <li><strong>Fees:</strong> Peddler Apps may charge fees for listing items, completing transactions, and other services. Fees are non-refundable.</li>
                                <li><strong>Prohibited Items:</strong> The sale or trade of counterfeit, stolen, or prohibited items is strictly forbidden.</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel4-content"
                        id="panel4-header"
                    >
                        <Typography component="span" variant="h6">4. Brand and Builder Storefronts</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component="div">
                            <ul>
                                <li><strong>Storefront Setup:</strong> Effects pedal brands and builders can set up storefronts to sell new pedals to registered members.</li>
                                <li><strong>Product Listings:</strong> All product listings must be accurate and comply with Peddler Apps guidelines.</li>
                                <li><strong>Order Fulfillment:</strong> Brands and builders are responsible for fulfilling orders promptly and providing customer support.</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel5-content"
                        id="panel5-header"
                    >
                        <Typography component="span" variant="h6">5. Code of Conduct</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component="div">
                            <ul>
                                <li><strong>Respectful Communication:</strong> Members must communicate respectfully and professionally with each other.</li>
                                <li><strong>No Fraud:</strong> Fraudulent activities, including but not limited to misrepresenting products, are strictly prohibited.</li>
                                <li><strong>Compliance with Laws:</strong> Members must comply with all applicable laws and regulations.</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel6-content"
                        id="panel6-header"
                    >
                        <Typography component="span" variant="h6">6. Violations and Enforcement</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component="div">
                            <ul>
                                <li><strong>Reporting Violations:</strong> Members can report violations of these Terms and Conditions to Peddler Apps.</li>
                                <li><strong>Investigation and Enforcement:</strong> Peddler Apps reserves the right to investigate reported violations and take appropriate action, including suspending or terminating accounts.</li>
                                <li><strong>Prosecution:</strong> Violators may be prosecuted to the fullest extent of the law.</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel7-content"
                        id="panel7-header"
                    >
                        <Typography component="span" variant="h6">7. Limitation of Liability</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Peddler Apps is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our services. We do not guarantee the accuracy, completeness, or usefulness of any content on our platform.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel8-content"
                        id="panel8-header"
                    >
                        <Typography component="span" variant="h6">8. Dispute Resolution</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component="div">
                            <ul>
                                <li><strong>Member Disputes:</strong> Members are encouraged to resolve disputes amicably. Peddler Apps may assist in mediating disputes but is not obligated to do so.</li>
                                <li><strong>Arbitration:</strong> Any disputes between members and Peddler Apps will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel9-content"
                        id="panel9-header"
                    >
                        <Typography component="span" variant="h6">9. Changes to Terms</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Peddler Apps reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting. Continued use of the services constitutes acceptance of the revised terms.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel10-content"
                        id="panel10-header"
                    >
                        <Typography component="span" variant="h6">10. Contact Information</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component="div">
                            <p>For any questions or concerns regarding these Terms and Conditions, please contact us at:</p>
                            <p><strong>Peddler App</strong><br/>
                                Email: tyler@peddlerapps.com</p>
                            <p style={{ marginTop: '16px', fontStyle: 'italic' }}>
                                By registering as a member and using Peddler App, you agree to comply with these Terms and Conditions. Thank you for being part of our trusted network.
                            </p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Container>
    );
}
