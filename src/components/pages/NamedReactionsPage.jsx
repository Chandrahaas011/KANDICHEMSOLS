import { useEffect } from 'react';
import { motion } from 'framer-motion';

function NamedReactionsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const reactions = [
    {
      id: 'm-mitsunobu',
      letter: 'M',
      name: 'Mitsunobu Reaction',
      description: [
        'The Mitsunobu reaction, discovered by Oyo Mitsunobu in the mid-20th century, is a pivotal organic synthesis reaction. It involves a dehydrative redox process to convert alcohols into esters using acids (pronucleophiles like carboxylic acids, imides, sulfonamides, thiols). Key reagents include phosphines (e.g., triphenylphosphine) and azodicarboxylates (e.g., DEAD, DIAD), typically in a suitable solvent.',
        'It proceeds via an SN2 mechanism, leading to an inversion of stereochemistry at the alcohol\'s carbon centre. This makes it particularly useful in synthesizing optically active compounds.'
      ],
      reactions: [
        {
          title: 'General Esterification',
          reactants: 'R¹R²CHOH + HOR³CO',
          reagents: 'PPh₃/DEAD',
          products: 'R¹R²CHO-COR³',
          note: 'R¹, R², R³ = Alkyl/Aryl'
        },
        {
          title: 'Azide Formation',
          reactants: 'R¹R²CHOH + HN₃',
          reagents: 'PPh₃/DEAD',
          products: 'R¹R²CHN₃',
          note: ''
        }
      ],
      details: [
        'For sterically hindered alcohols, 4-nitrobenzoic acids or phthalimides are used for coupling, along with other reagents like fluorinated alcohols and hydroxamates. This reaction enables C-C, C-N, C-O, and C-S bond formation and achieves inversion of configuration when coupling chiral secondary alcohols with pronucleophiles.',
        'The Mitsunobu reaction plays a crucial role in organic synthesis, particularly in the total synthesis of natural products, pharmaceuticals, analogues, and semisynthetic derivatives. It often serves as a key step in the development of various drugs and natural compounds.'
      ],
      reference: 'DOI: 10.3390/molecules27206953',
      alternatives: [
        {
          name: 'Tsunoda Reagent',
          cas: 'CAS No 157141-27-0',
          description: 'Cyanomethylenetributylphosphorane'
        },
        {
          name: 'Redox-neutral Organocatalyst',
          cas: 'CAS No 70127-50-3',
          description: '(2-hydroxybenzyl)diphenylphosphine oxide',
          link: 'https://www.science.org/doi/10.1126/science.aax3353'
        }
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-transparent theme-transition min-h-screen">
      <div className="container-custom">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-slate-900 dark:text-slate-100">Named Reactions</h1>
          
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-md p-6 mb-8 theme-transition border border-slate-200 dark:border-zinc-800">
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Named reactions are chemical reactions that have been named after their discoverers or developers. 
              They are an important part of the chemist's vocabulary and provide a convenient shorthand for complex transformations.
            </p>
            
            <p className="text-slate-600 dark:text-slate-300">
              This page contains a comprehensive database of named reactions in organic chemistry, 
              complete with mechanisms, examples, and applications.
            </p>
          </div>
          
          {/* Reactions organized alphabetically */}
          <div className="space-y-8">
            {reactions.map((reaction, index) => (
              <motion.div
                key={reaction.id}
                id={reaction.id}
                className="bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden theme-transition border border-slate-200 dark:border-zinc-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="bg-gradient-to-r from-sky-700 to-sky-800 dark:from-sky-500 dark:to-sky-600 px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-sky-700 dark:text-sky-400">{reaction.letter}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white">{reaction.name}</h2>
                  </div>
                </div>
                
                <div className="p-6 space-y-6">
                  {/* Description */}
                  <div className="space-y-4">
                    {reaction.description.map((paragraph, idx) => (
                      <p key={idx} className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Reaction Schemes */}
                  {reaction.reactions && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Reaction Schemes:</h3>
                      <div className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-sm border border-slate-200 dark:border-zinc-800">
                        <img 
                          src="/Mitsunobu-reaction.png" 
                          alt={`${reaction.name} scheme`}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  )}

                  {/* Additional Details */}
                  {reaction.details && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Details:</h3>
                      {reaction.details.map((detail, idx) => (
                        <p key={idx} className="text-slate-700 dark:text-slate-300 leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Reference */}
                  {reaction.reference && (
                    <div className="pt-4 border-t border-slate-200 dark:border-zinc-800">
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        <span className="font-semibold">Reference:</span> {reaction.reference}
                      </p>
                    </div>
                  )}

                  {/* Alternatives */}
                  {reaction.alternatives && (
                    <div className="pt-4 border-t border-slate-200 dark:border-zinc-800">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                        Alternatives to Mitsunobu Reaction:
                      </h3>
                      <div className="space-y-3">
                        {reaction.alternatives.map((alt, idx) => (
                          <div key={idx} className="bg-sky-50 dark:bg-zinc-800 rounded-lg p-4 border border-slate-200 dark:border-zinc-700">
                            <h4 className="font-semibold text-slate-900 dark:text-slate-100">{alt.name}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{alt.cas}</p>
                            <p className="text-slate-700 dark:text-slate-300 mt-2">{alt.description}</p>
                            {alt.link && (
                              <a 
                                href={alt.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sky-700 dark:text-sky-400 hover:underline text-sm mt-2 inline-block"
                              >
                                Learn more →
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default NamedReactionsPage;